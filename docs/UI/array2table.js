var arrayToTable = function (data, options) {

    "use strict";

    var table = $('<table id="evaluation" />'),
        thead,
        tfoot,
        rows = [],
        row,
        i,
        j,
        defaults = {
            th: true, // should we use th elemenst for the first row
            thead: false, //should we incldue a thead element with the first row
            tfoot: false, // should we include a tfoot element with the last row
            attrs: {} // attributes for the table element, can be used to
        };

    options = $.extend(defaults, options);

    table.attr(options.attrs);

    // loop through all the rows, we will deal with tfoot and thead later
    for (i = 0; i < data.length; i = i + 1) {
        row = $('<tr />');
        for (j = 0; j < data[i].length; j = j + 1) {
            if (i === 0 && options.th) {
                //row.append($('<th />').html(data[i][j]));
            } else {
                row.append('<td><input class="form-control" type="text" value="' + data[i][j] + '"></td>');
            }
        }
        rows.push(row);
    }

    // if we want a thead use shift to get it
    if (options.thead) {
        thead = rows.shift();
        thead = $('<thead />').append(thead);
        table.append(thead);
    }

    // if we want a tfoot then pop it off for later use
    if (options.tfoot) {
        tfoot = rows.pop();
    }

    // add all the rows
    for (i = 0; i < rows.length; i = i + 1) {
        table.append(rows[i]);
    }

    // and finally add the footer if needed
    if (options.tfoot) {
        tfoot = $('<tfoot />').append(tfoot);
        table.append(tfoot);
    }

    return table;
};
