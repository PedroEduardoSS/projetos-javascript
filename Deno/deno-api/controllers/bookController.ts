import { Context } from "https://deno.land/x/abc@v1.3.3/mod.ts";
import { Book } from '../models/bookModel.ts';
import { v4 } from "https://deno.land/std/uuid/mod.ts";

let books: Book[] = [
    {id: '1', title: "Lotr", author: 'J.R.R.Tolkien', pages: 700},
    {id: '2', title: "evl", author: 'Marcos', pages: 300},
    {id: '3', title: "Roma", author: 'Augusto Cesar', pages: 567}
];

export const get_all_books = (ctx: Context) => {
    return ctx.json(books, 200);
}

export const get_book = (ctx: Context) => {
    const { id } = ctx.params;
    const book = books.find((b: Book) => b.id === id);
    if (book){
        return ctx.json(book, 200);
    }
    return ctx.string('no book with that id', 404);
}

export const create_book = (ctx: Context) => {
    const { title, author, pages } = await ctx.body();

    const id = v4.generate();
    const book = { id, title, author, pages };
    books.push(book);

    return ctx.json(book, 201);
}

export const delete_book = (ctx: Context) => {
    const { id } = ctx.params;
    const book = books.find((b: Book) => b.id === id);

    if (book){
        books = book.filter((b: Book) => b !== id);
        return ctx.json(book, 200);
    }
    return ctx.string('no book with that id', 404);
}
