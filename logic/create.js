const toolbarOptions = [[{"size": []}, {"font": []}], 
["bold", "italic", "underline", "strike"],
[{"list": "ordered"}, {"list": "bullet"}, {"align": []}],
["link", "image", "video"], 
["formula", "clean"]];

const problemEditor = new Quill("#problem-editor", {
    modules: {
        toolbar: toolbarOptions
    },
    theme: "snow",
    placeholder: "How many licks does it take to get to the Tootsie Roll center of a Tootsie Pop?"
});

const solutionEditor = new Quill("#solution-editor", {
    modules: {
        toolbar: toolbarOptions
    },
    theme: "snow",
    placeholder: "It's over 9000!"
});

const hintEditors = [];

//creating editors for each hint input
for (let i = 1; i <= 4; i++) {
    const editor = new Quill("#hint-" + i, {
        modules: {
            toolbar: toolbarOptions
        },
        theme: "snow",
        placeholder: "Input hint here"
    });
    
    hintEditors.push(editor);
}

//adjusts number of hint inputs in form based on "Number of hints" radio buttons
//@param radioButton - radio button that was just selected
function adjustHints(radioButton) {
    const hints = radioButton.value;
    console.log(hints);

    //showing and hiding hint inputs as needed
    for (let i = 1; i <= 4; i++) {
        const editor = document.getElementById("hint-container-" + i);
        editor.style["display"] = (i <= hints) ? "block" : "none";
    }
}