import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {

    const presents = await prisma.present.findMany()

    res.json(presents)
    res.status(200).end()

    // res.status(404).end()
}