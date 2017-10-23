export default {
  type: 'peritext-contextualizer',
  id: 'dicto',
  name: 'dicto',
  coverage: {
    inlineStatic: false,
    blockStatic: true,
    inlineDynamic: false,
    blockDynamic: true,
  },
  model: {
    acceptedResourceTypes: [{type: 'dicto'}],
    block: {
      expandable: true,
      options: [
        {
          id: 'displayCommentsInCodex',
          title: {
            fr: 'Afficher les commentaires en mode codex',
            en: 'Display comments in codex mode',
          },
          type: 'boolean'
        },
        {
          id: 'displayMode',
          title: {
            fr: 'Mode d\'affichage',
            en: 'Display mode'
          },
          type: 'select',
          values: [{
            id: 'columns',
            labels: {
              fr: 'Colonnes',
              en: 'Columns'
            }
          }, {
            id: 'fullscreen',
            labels: {
              fr: 'Plein écran',
              en: 'Full screen'
            }
          }]
        }
      ]
    }
  }
}