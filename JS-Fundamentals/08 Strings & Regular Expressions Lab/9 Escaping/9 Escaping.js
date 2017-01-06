function htmlList(items) {
    return "<ul>\n" +
        items.map(htmlEscape).map(
            item => `  <li>${item}</li>`).join("\n") +
        "</ul>\n";
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

document.write(htmlList(['<b>unescaped text</b>', 'normal text']));
document.write(htmlList(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']));

