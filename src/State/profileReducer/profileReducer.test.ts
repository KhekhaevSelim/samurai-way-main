import {addPostAC, ProfilePageType, profileReducer} from "./profileReducer";

let startState : ProfilePageType;
beforeEach(()=> {
    startState = {
        posts: [
            {id: 1, message: "how do you do?", likesCount: 12},
            {id: 2, message: "i miss you", likesCount: 9}
        ],
        profile : null,
        status : ""
    }
})
test("correct post should be added", ()=> {

    let endState = profileReducer(startState, addPostAC("new post"))

    expect(startState).not.toEqual(endState)
    expect(startState.posts.length).toBe(2)
    expect(endState.posts.length).toBe(3)
})
