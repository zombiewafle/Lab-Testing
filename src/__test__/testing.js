import { render } from "@testing-library/react";
import React from "react";
import { ReactDOM } from "react";
import {calc} from "../App"; 


test("renders the display of the calc", ()=>{
    render(<App></App>)
    const display = screen.getElementById("display")
    expect(display).toBeInTheDocument();
})

test("renders the calculator if all is working", ()=>{
    render(<App></App>)
    const calc = screen.getElementById("calc")
    expect(calc).toBeInTheDocument();
})