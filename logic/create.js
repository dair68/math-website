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

const hintEditor = new Quill("#hint-1-editor", {
    modules: {
        toolbar: toolbarOptions
    },
    theme: "snow",
    placeholder: "First Hint"
});