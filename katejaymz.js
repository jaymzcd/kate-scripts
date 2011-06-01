/* kate-script
 * author: Jaymz Campbell <jaymz@jaymz.eu>
 * license: MIT
 * revision: 1
 * kate-version: 3.4
 * type: commands
 * functions: temp_trans, py_trans
 * i18n-catalog: mycatalog
 *
 */

function help(cmd) {
    if (cmd == "temp_trans") {
        return i18n("Wraps the string in a django template translation tag");
    } else if (cmd == "...") {
        // ...
    }
}

function action(cmd) {
    var a = new Object();
    if (cmd == "temp_trans") {
        a.text = i18n("Wrap django template trans tag");
        a.icon = "";
        a.category = "";
        a.interactive = false;
        a.shortcut = "";
    } else if (cmd == "py_trans") {
        // same for next action
    }
    return a;
}
 
function temp_trans(arg1) {
    var selectionRange = view.selection();
    if (selectionRange.isValid()) {
        var input = view.selectedText();
        view.removeSelectedText();
        document.insertText(selectionRange.start, '{% trans "'+input+'" %}');
    }
}
