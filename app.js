import express from 'express';
import sequelize from './src/config/db.js';
import userRoutes from './src/routes/userRoutes.js';


const app = express()

app.use(express.json());

app.use('/users', userRoutes);

sequelize.sync()
    .then(() => {
        console.log('Database synced successfully');
        
        app.listen(5000, () => {
            console.log('Server is running on port 5000');
        })
    }).catch(err => console.log('Error syncing database: ', err));

