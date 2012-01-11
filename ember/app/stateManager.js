setTimeout(function() {
    KR.stateManager = Ember.StateManager.create({
    rootElement: '#mainArea',
    initialState: 'visArbeidsbenk',

    visArbeidsbenk: Ember.ViewState.create({

        enter: function(stateManager) {
            this._super(stateManager);
            console.log('enter visArbeidsbenk view');
        },

        exit: function(stateManager) {
            this._super(stateManager);
            console.log('exit visArbeidsbenk view');
        },

        view: Em.ContainerView.create({
            childViews: ['manuellOppfolgingView', 'sakerNaerForfallView', 'mineAapneSakerVew'],

            manuellOppfolgingView: KR.TableView.extend({
                tableId: 'manuellOppfolgingTabell',
                contentBinding: 'KR.ManuellOppfolgingController.content',
                classNames: ['benk'],
                isVisible: true
            }),

             sakerNaerForfallView: KR.TableView.extend({
             tableId: 'sakerNaerForfallTabell',
             contentBinding: 'KR.SakerNaerForfallController.content',
             classNames: ['benk'],
             isVisible: true
             }),

             mineAapneSakerVew: KR.TableView.extend({
             tableId: 'mineAapneSakerTabell',
             contentBinding: 'KR.MineAapneSakerController.content',
             classNames: ['benk'],
             isVisible: true
             }),

             init: function() {
             this._super();
             console.log('mainView init');
             }
        })
    }),

    visRegistrereSak: Em.ViewState.create({
        view: Em.View.create({
            templateName: 'html-felt-template',
            tagName: 'div',
            contentBinding: 'KR.RegistrereSakController.content'

        }),

        enter: function(stateManager) {
            this._super(stateManager);
            console.log('enter visRegistrereSak View');
        },

        exit: function(stateManager) {
            this._super(stateManager);
            console.log('exit visRegistrereSak View');
        }
    })
});

}, 50);