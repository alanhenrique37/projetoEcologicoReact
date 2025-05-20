import { type SQLiteDatabase } from "expo-sqlite";

export async function initializeDataBase(dataBase: SQLiteDatabase){
    await dataBase.execAsync(`
        CREATE TABLE IF NOT EXISTS dados(
            id integer primary key autoincrement,
            dataResiduo text not null,
            categoria text not null,
            peso text not null
        ); 
    `)
}