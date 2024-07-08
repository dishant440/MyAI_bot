import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';
configDotenv();


export  const connection = async()=>{

    await mongoose.connect(process.env.DATABASE_URL)
        .then(()=>{
            console.log('connecting to database');
        }).catch(err=>{
            console.log('error connecting to database');
        })
    }

