// قاعدة بيانات لغة Luau والمكتبات
const LuauDictionary = {
    keywords: ["local", "function", "if", "then", "else", "elseif", "end", "while", "do", "for", "in", "repeat", "until", "break", "continue", "return", "export", "type", "typeof"],
    types: ["any", "unknown", "never", "string", "number", "boolean", "nil", "thread", "buffer", "vector"],
    libraries: {
        math: ["abs", "acos", "asin", "atan", "ceil", "clamp", "cos", "deg", "floor", "max", "min", "noise", "random", "round", "sin", "sqrt"],
        string: ["byte", "char", "find", "format", "gmatch", "gsub", "len", "lower", "match", "rep", "split", "sub", "upper"],
        table: ["concat", "insert", "remove", "sort", "create", "find", "clear", "move", "clone", "freeze", "isfrozen"],
        buffer: ["create", "fromstring", "tostring", "len", "copy", "fill", "readi8", "writei8", "readf32", "writef32"]
    }
};

function insertCode(text) {
    const editor = document.getElementById('luauEditor');
    if (!editor) return;
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    editor.value = editor.value.substring(0, start) + text + editor.value.substring(end);
    editor.focus();
}
