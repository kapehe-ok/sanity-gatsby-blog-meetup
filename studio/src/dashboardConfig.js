export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f74ad1a7a76140093a7ec35',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-meetup-studio',
                  apiId: 'ea874b07-ba89-4baa-bf58-c0964c703e96'
                },
                {
                  buildHookId: '5f74ad1af485ef00fe382ef8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-meetup',
                  apiId: 'ac87e807-658c-4608-a967-0af1e4774c69'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kapehe-ok/sanity-gatsby-blog-meetup',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-meetup.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
