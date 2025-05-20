import { useSQLiteContext } from 'expo-sqlite';

export type ClienteDataBase = {
    id: number
    dataResiduo: string
    categoria: string
    peso: string
}//Criando o local de variáveis do Banco

export function useClienteDataBase(){
    const dataBase = useSQLiteContext()//Acessar todos os métodos do BD

    async function create(data: Omit<ClienteDataBase, "id">){
        const statement = await dataBase.prepareAsync(
            "insert into dados(dataResiduo, categoria, peso) values($dataResiduo,$categoria,$peso)"
        )

        try{
            const result = await statement.executeAsync({
                $dataResiduo: data.dataResiduo,
                $categoria: data.categoria,
                $peso: data.peso
            })
            
            //Coletando o último id cadastrado e devolvendo
            const insertedRowId = result.lastInsertRowId.toLocaleString()
            return { insertedRowId }

        }catch(error){
            throw error
        }finally{
            await statement.finalizeAsync()
        }
    }//fim do create

    async function consultar(dataResiduo:string){
        try{
            const query = "select * from dados where dataResiduo like ?"//Interrogação: Substituir por qualquer item de busca
            const response = await dataBase.getAllAsync<ClienteDataBase>(query,`%${dataResiduo}%`)
            return response
        }catch(error){
            throw error
        }
    }//fim do consultar

    async function remove(id:number){
        try{
            await dataBase.execAsync("Delete from dataResiduo where id = " + id)
        }catch(error){
            throw(error)
        }
    }//fim do remover

    async function atualizar(data: ClienteDataBase){
        const statement = await dataBase.prepareAsync(
            "update dados set dataResiduo = $dataResiduo, categoria = $categoria, peso = $peso where id = $id"
        )

        try{
            await statement.executeAsync({
                $id: data.id,
                $dataResiduo: data.dataResiduo,
                $categoria: data.categoria,
                $peso: data.peso
            })
        }catch(error){
            throw error
        }finally{
            await statement.finalizeAsync()
        }
    }//fim do atualizar

    return { create, consultar, remove, atualizar }
}//fim da função