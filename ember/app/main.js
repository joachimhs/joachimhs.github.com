KR.MenuItem = Em.Object.extend({
            menuName: 'default',
            menuAction: 'default',
            subItems: [],

            hasSubItems: function() {
                return this.get('subItems').length > 0;
            }.property(),

            addSubItem: function(menuName, menuAction) {
                this.get('subItems').pushObject(KR.MenuItem.create({menuName: menuName, menuAction: menuAction}))
            },

            menuActionString: function() {
                return "KR.MenuItemController.set('clickedItem', '" + this.get('menuAction') + "')";
            }.property('menuAction').cacheable()
        });

KR.MenuItemController = Em.ArrayProxy.create({
            content: [],
            clickedItem: null,

            createMenuItem: function(menuName) {
                var newItem = KR.MenuItem.create({menuName: menuName, subItems: []});
                this.get('content').pushObject(newItem);
                return newItem;
            },

            createMenu: function() {
                console.log('KR.MenuItemController createMenu');
            },

            observeClickedItem: function() {
                var clickedItem = this.get('clickedItem');
                console.log('clicked Item: ' + clickedItem);
                if (clickedItem == "default") {
                    KR.stateManager.goToState('start');
                } else {
                    KR.stateManager.goToState(clickedItem);
                }
            }.observes('clickedItem'),

            init: function() {
                console.log('KR.MenuItemController init')
                var arbeidsbenkMenuItem = this.createMenuItem('Arbeidsbenk');
                var sakerMenuItem = this.createMenuItem('Saker');
                var rapporterMenuItem = this.createMenuItem('Rapporter');
                var adminMenuItem = this.createMenuItem('Administrasjon')
                var loggUtMenuItem = this.createMenuItem('Logg Ut');

                //saker
                sakerMenuItem.addSubItem('Registrere Ny Sak', 'visRegistrereSak');
                sakerMenuItem.addSubItem('Saker Med Manuell Oppfølging');
                sakerMenuItem.addSubItem('Saker Nær Eller Over Forfallsdato');
                sakerMenuItem.addSubItem('Saker Uten Saksbehandler');

                rapporterMenuItem.addSubItem('Rapport 1');
                rapporterMenuItem.addSubItem('Rapport 2');
                rapporterMenuItem.addSubItem('Rapport 3');
                rapporterMenuItem.addSubItem('Rapport 4');

                console.log(arbeidsbenkMenuItem.get('menuName') + ' :: ' + arbeidsbenkMenuItem.get('subItems'));
                console.log(sakerMenuItem.get('menuName') + ' :: ' + sakerMenuItem.get('subItems'));
                console.log(rapporterMenuItem.get('menuName') + ' :: ' + rapporterMenuItem.get('subItems'));
                console.log(loggUtMenuItem.get('menuName') + ' :: ' + loggUtMenuItem.get('subItems'));
                this._super();
                this.contentDidChange();
            }
        });

KR.ManuellOppfolgingController = SC.Object.create({
            content: null,

            createTableItem: function(header) {
                console.log('KR.ManuellOppfolgingController createTableItem creating table with header: ' + header);
                var newItem = KR.TableItem.create({header: header, columnHeaders: [], rows: []});
                newItem.get('columnHeaders').pushObject(KR.ColumnHeader.create({header: 'Dato'}));
                newItem.get('columnHeaders').pushObject(KR.ColumnHeader.create({header: 'Sak'}));
                newItem.get('columnHeaders').pushObject(KR.ColumnHeader.create({header: 'Status'}));
                this.set('content', newItem);
                return newItem;
            },

            init: function() {
                console.log('ManuellOppfolgingController');
                this.createTableItem('Saker som trenger manuell oppfølging');

                var table = this.get('content');
                KR.generateTestTabell(table);

                /*
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 */
            }
        });

KR.SakerNaerForfallController = SC.Object.create({
            content: null,

            createTableItem: function(header) {
                console.log('KR.ManuellOppfolgingController createTableItem creating table with header: ' + header);
                var newItem = KR.TableItem.create({header: header, columnHeaders: [], rows: []});
                newItem.get('columnHeaders').pushObject(KR.ColumnHeader.create({header: 'Forfallsdato'}));
                newItem.get('columnHeaders').pushObject(KR.ColumnHeader.create({header: 'Sak'}));
                newItem.get('columnHeaders').pushObject(KR.ColumnHeader.create({header: 'Status'}));
                this.set('content', newItem);
                return newItem;
            },

            init: function() {
                console.log('ManuellOppfolgingController');
                this.createTableItem('Saker nær eller over forfallsdato');

                var table = this.get('content');
                KR.generateTestTabell(table);

                /*
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 */
            }
        });

KR.MineAapneSakerController = SC.Object.create({
            content: null,

            createTableItem: function(header) {
                console.log('KR.ManuellOppfolgingController createTableItem creating table with header: ' + header);
                var newItem = KR.TableItem.create({header: header, columnHeaders: [], rows: []});
                newItem.get('columnHeaders').pushObject(KR.ColumnHeader.create({header: 'Dato'}));
                newItem.get('columnHeaders').pushObject(KR.ColumnHeader.create({header: 'Sak'}));
                newItem.get('columnHeaders').pushObject(KR.ColumnHeader.create({header: 'Status'}));
                this.set('content', newItem);
                return newItem;
            },

            init: function() {
                console.log('ManuellOppfolgingController');
                this.createTableItem('Mine Åpne Saker');

                var table = this.get('content');
                KR.generateTestTabell(table);
                /*
                 . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 */
            }
        });

KR.HtmlFeltType = Em.Object.extend({
            feltNavn: '',
            feltType: '',
            feltVerdi: '',

            isInputFelt: function() {
                return this.get('feltType') == 'input';
            }.property('feltType').cacheable()
        });

KR.HtmlSkjema = Em.Object.extend({
            overskrift: '',
            felter: []
        });

KR.RegistrereSakController = Em.Object.create({
            content: null,

            init: function() {
                console.log('Em.RegistrereSakController init. Pusher felter');
                this.set('content', KR.HtmlSkjema.create({overskrift: 'Registrere Ny Sak', felter: []}));
                this.get('content').get('felter').pushObject(KR.HtmlFeltType.create({feltNavn: 'Saksnummer', feltVerdi: 'abc', feltType: 'input'}));
                this.get('content').get('felter').pushObject(KR.HtmlFeltType.create({feltNavn: 'Innmelder', feltVerdi: 'def', feltType: 'input'}));
            }
        });

