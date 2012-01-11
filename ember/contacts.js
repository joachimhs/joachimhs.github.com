<!DOCTYPE html>
<html>
  <head>
    <title>Ember.js Contacts</title>
    <link rel="stylesheet" href="style.css" type="text/css" media="screen" charset="utf-8">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js"></script>
    <script type="text/javascript" src="../lib/ember.min.js"></script>
    <script type="text/javascript" src="app.js"></script>
  </head>
  <body>
      <div id="container">
      <div id="contact-list">
        <script type="text/x-handlebars">
          <h2>My Contacts</h2>
          <ul>
            {{#each App.contactsController.sortedContacts}}
              {{#view App.ContactListView contentBinding="this"}}
                {{#with content}}
                  <li>
                  {{#if hasName}}
                  <b>{{firstName}}</b> {{#if firstName}}{{lastName}}{{else}}<b>{{lastName}}</b>{{/if}}
                  {{else}}
                  <span class="no-name">no name</span>
                  {{/if}}
                {{/with}}
              {{/view}}
            {{/each}}
          </ul>
        {{#button action="newContact"}}New Contact{{/button}}
        </script>
      </div>

      <div id="detail">
        <script type="text/x-handlebars">
          {{#if App.selectedContactController.content}}
            {{#view App.CardView}}
              <div class="name">
                {{editable "content.firstName"}} {{editable "content.lastName"}}
              </div>

              <table class="phone-numbers">
                {{#each content.phoneNumbers}}
                  <tr>
                    <td>{{editable number}}</td>
                    <td>{{view App.DeleteNumberView contentBinding="this"}}</td>
                  </tr>
                {{/each}}
              </table>
              {{#view SC.Button target="contentView" action="addPhoneNumber"}}
                Add Phone Number
              {{/view}}
            {{/view}}
          {{else}}
            <div class="no-contact-selected">No contact selected.</div>
          {{/if}}

        </script>
    </div>

    <script type="text/x-handlebars" data-template-name="edit-field">
      {{#if isEditing}}
        {{view App.TextField valueBinding="value" propagatesEvents=true}}
      {{else}}
        {{#if value}}
          {{value}}
        {{else}}
          <span class="no-name">empty</span>
        {{/if}}
      {{/if}}
    </script>
  </body>
</html>
