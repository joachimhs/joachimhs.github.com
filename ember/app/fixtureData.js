KR.generateTestTabell = function(table) {

    var row1 = KR.TableRowItem.create({columns: []});
    row1.get('columns').pushObject(KR.TableColumnItem.create({columnData: '01.01.2012'}));
    row1.get('columns').pushObject(KR.TableColumnItem.create({columnData: 'Lorem Ipsum Dolor sit amet consect'}));
    row1.get('columns').pushObject(KR.TableColumnItem.create({columnData: 'AKTIV'}));
    table.get('rows').pushObject(row1);

    var row2 = KR.TableRowItem.create({columns: []});
    row2.get('columns').pushObject(KR.TableColumnItem.create({columnData: '30.12.2011'}));
    row2.get('columns').pushObject(KR.TableColumnItem.create({columnData: 'consectetur adipisicing elit'}));
    row2.get('columns').pushObject(KR.TableColumnItem.create({columnData: 'AKTIV'}));
    table.get('rows').pushObject(row2);

    var row3 = KR.TableRowItem.create({columns: []});
    row3.get('columns').pushObject(KR.TableColumnItem.create({columnData: '29.12.2011'}));
    row3.get('columns').pushObject(KR.TableColumnItem.create({columnData: 'sed do eiusmod tempor incididunt'}));
    row3.get('columns').pushObject(KR.TableColumnItem.create({columnData: 'FERDIG'}));
    table.get('rows').pushObject(row3);

    var row4 = KR.TableRowItem.create({columns: []});
    row4.get('columns').pushObject(KR.TableColumnItem.create({columnData: '26.12.2011'}));
    row4.get('columns').pushObject(KR.TableColumnItem.create({columnData: 'Ut labore et dolore magna aliqua'}));
    row4.get('columns').pushObject(KR.TableColumnItem.create({columnData: 'AKTIV'}));
    table.get('rows').pushObject(row4);

    var row5 = KR.TableRowItem.create({columns: []});
    row5.get('columns').pushObject(KR.TableColumnItem.create({columnData: '26.12.2011'}));
    row5.get('columns').pushObject(KR.TableColumnItem.create({columnData: 'Ut enim ad minim veniam, quis nostrud exercitation'}));
    row5.get('columns').pushObject(KR.TableColumnItem.create({columnData: 'AKTIV'}));
    table.get('rows').pushObject(row5);

    var row6 = KR.TableRowItem.create({columns: []});
    row6.get('columns').pushObject(KR.TableColumnItem.create({columnData: '22.12.2011'}));
    row6.get('columns').pushObject(KR.TableColumnItem.create({columnData: 'ullamco laboris nisi ut aliquip ex ea commodo consequat'}));
    row6.get('columns').pushObject(KR.TableColumnItem.create({columnData: 'AKTIV'}));
    table.get('rows').pushObject(row6);

    return table;
}