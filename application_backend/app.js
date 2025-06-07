import express from 'express';
import cors from 'cors'
const app = express()
const port = 8000

app.use(cors())
app.use(express.json())

app.get('/api/', (req, res) => {
    res.status(200).json({ Message: "Welcome to main page" })
})

app.get('/api/health', (req, res) => {
    res.status(200).json({ Message: "Backend is alive" })
})

app.get('/api/test', (req, res) => {
    res.status(200).json({ Message: "Welcome to the test page" })
})

app.post('/api/calculate', (req, res) => {
    try {
        const requestBody = req.body
        const { currentDate, birthdayDate } = requestBody

        if (!currentDate || !birthdayDate) {
            return res.status(400).json({ error: 'Both currentDate and birthdayDate are required.' });
        }

        const current = new Date(currentDate);
        const birthday = new Date(birthdayDate);

        if (isNaN(current) || isNaN(birthday)) {
            return res.status(400).json({ error: 'Invalid date format.' });
        }

        let daysToBirthday = Math.ceil((birthday - current) / (1000 * 60 * 60 * 24));

        if (daysToBirthday > 365 || daysToBirthday < -365) {
            daysToBirthday = daysToBirthday % 365
        }

        if (daysToBirthday < 0) {
            daysToBirthday += 365
        }

        const response = { "daysToBirthday": daysToBirthday }
        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Internal server error."})
    }
    
})

app.listen(port, () => {
    console.log(`Backend listening on port ${port}`)
})
