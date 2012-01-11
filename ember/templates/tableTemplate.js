{{#with content}}
    <caption style="width: 80%;">{{ header }}</caption>
    <thead>
        <tr>
            {{#each columnHeaders}}
                <th>{{ header }}</th>
            {{/each}}
        </tr>
    </thead>
    <tbody>
        {{#each rows}}
            <tr>
                {{#each columns}}
                    <td>{{columnData}}</td>
                {{/each}}
            </tr>
        {{/each}}
    </tbody>
{{/with}}