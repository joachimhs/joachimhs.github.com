KR.TableView = Em.View.extend({
    templateName: 'table-template',
    tagName: 'div',
    tableId: '',

    didInsertElement: function() {
        this._super();
        $("#" + this.get('tableId')).tablesorter({
            headers: {1: {sorter:'date'}}
        });
    }
});

KR.TableItem = Em.Object.extend({
    header: "",
    columnHeaders: [],
    rows: [],

    addRow: function(row) {
        this.get('rows').push(row);
    }
});

KR.ColumnHeader = Em.Object.extend({
    header: ''
});

KR.TableRowItem = Em.Object.extend({
    columns: []
});

KR.TableColumnItem = Em.Object.extend({
    columnData: ''
});