import { Router } from 'express'

const router = Router()

const books = []

router.get('/books', (req, res)=> {
  return res.status(200).send(books)
})

router.post('/books', (req, res)=> {
  const { titulo, descricao, edicao, autor } = req.body
  const book = { id: (books.length + 1), titulo, descricao, edicao, autor }
  books.push(book)

  return res.status(201).send(book)
})

router.delete('/books/:id', (req, res)=>{
  try {
    const { id } = req.params
    const book_index = books.findIndex((book) => book.id === parseInt(id))

    if(!(book_index !== -1)) {
      return res.status(404).send({
        error: 'Livro não encontrado'
      })
    }
    books.splice(book_index, 1)

    return res.status(200).send({
      success: 'Livro deletado com sucesso'
    })
  } catch (error) {
    return res.status(400).send({
      error: 'Erro ao remover o livro'
    })
  }
})

router.put('/books/:id', (req, res)=> {
  try {
    const { id } = req.params
    const book_index = books.findIndex((book) => book.id === parseInt(id))
    if(!(book_index !== -1)) {
      return res.status(404).send({
        error: 'Livro não encontrado'
      })
    }
    const book = {...books[book_index], ...req.body}
    books[book_index] = book

    return res.status(200).send(book)
  } catch (error) {
    return res.status(400).send({
      error: 'Erro ao atualizar o livro'
    })
  }
})

export default router
