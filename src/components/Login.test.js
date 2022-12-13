import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login/Login";

jest.mock("axios",()=>({
    __esModule:true,
    default:{
        get:()=>({
            data:{id:1,name:"John"}
        })
    }
}))

test("username should be rendered",()=>{
    render(<Login/>);
    const usernameEl = screen.getByPlaceholderText(/username/i);
    expect(usernameEl).toBeInTheDocument();
})
test("password should be rendered",()=>{
    render(<Login/>);
    const passwordEl = screen.getByPlaceholderText(/password/i);
    expect(passwordEl).toBeInTheDocument();
})
test("button should be rendered",()=>{
    render(<Login/>);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
})
test("button should be disabled",()=>{
    render(<Login/>);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeDisabled();
})

test("Loading should not be rendered",()=>{
    render(<Login/>);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).not.toHaveTextContent(/please wait/i);
})

test("username input should changed",()=>{
    render(<Login/>);
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    const testValue = "test";
    fireEvent.change(usernameInputEl,{target:{value:testValue}})
    expect(usernameInputEl.value).toBe(testValue);
})

test("password input should changed",()=>{
    render(<Login/>);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    const testValue = "test";
    fireEvent.change(passwordInputEl,{target:{value:testValue}})
    expect(passwordInputEl.value).toBe(testValue);
})

test("Error message should not be visible",()=>{
    render(<Login/>);
    const errorEl = screen.getByTestId("error");
    expect(errorEl).not.toBeVisible();
})

test("button should not be disable when input exits",()=>{
    render(<Login/>);
    const errorEl = screen.getByTestId("error");
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    const testValue = "test";

    fireEvent.change(usernameInputEl,{target:{value:testValue}});
    fireEvent.change(passwordInputEl,{target:{value:testValue}});
    expect(errorEl).not.toBeDisabled();
})

/*  test("Loading should be rendered when clicked",()=>{
    render(<Login/>);
    const buttonEl = screen.getByRole("button");
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    const testValue = "test";

    fireEvent.change(usernameInputEl,{target:{value:testValue}});
    fireEvent.change(passwordInputEl,{target:{value:testValue}});
    fireEvent.click(buttonEl);
    expect(buttonEl).toHaveTextContent(/please wait/i)
}) */
 
 /*  test("Loading should not be rendered after fetching",async()=>{
    render(<Login/>);
    const buttonEl = screen.getByRole("button");
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    const testValue = "test";

    fireEvent.change(usernameInputEl,{target:{value:testValue}});
    fireEvent.change(passwordInputEl,{target:{value:testValue}});
    fireEvent.click(buttonEl);
    
    await waitFor(()=>expect(buttonEl).not.toHaveTextContent(/please wait/i));
}) */ 

/* test("User should be rendered after fetching",async()=>{
    render(<Login/>);
    const buttonEl = screen.getByRole("button");
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    const testValue = "test";

    fireEvent.change(usernameInputEl,{target:{value:testValue}});
    fireEvent.change(passwordInputEl,{target:{value:testValue}});
    fireEvent.click(buttonEl);

    const userInfo =  await screen.findByText("John");
    expect(userInfo).toBeInTheDocument();
}) */ 