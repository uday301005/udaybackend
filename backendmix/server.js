import app from './app.js'
import { dbConnection } from './database/dbConnection.js'

const startServer = async () => {
    try {
        // First connect to the database
        await dbConnection()
        
        // Then start the server
        const PORT = process.env.PORT || 4000
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (error) {
        console.error('Failed to start server:', error.message)
        process.exit(1)
    }
}

startServer()

