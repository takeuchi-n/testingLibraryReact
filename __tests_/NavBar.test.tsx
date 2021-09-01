import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from "@testing-library/user-event"
import { getPage } from 'next-page-tester'
import { initTestHelpers } from 'next-page-tester'

initTestHelpers()

describe("Nav",()=>{
    it("select page",async()=>{
        const {page} = await getPage({
            route:"/index",
        })
        render(page)
        // userEvent.click(screen.getByTestId("blog-nav"))
        // expect(await screen.findByText("Blog Page")).toBeInTheDocument()
        userEvent.click(screen.getByTestId("comment-nav"))
        expect(await screen.findByText("Comment Page")).toBeInTheDocument()
        userEvent.click(screen.getByTestId("context-nav"))
        expect(await screen.findByText("Context Page")).toBeInTheDocument()
        userEvent.click(screen.getByTestId("task-nav"))
        expect(await screen.findByText("Todos Page")).toBeInTheDocument()
        userEvent.click(screen.getByTestId("home-nav"))
        expect(await screen.findByText("Welcome to Nextjs")).toBeInTheDocument()
    })
})