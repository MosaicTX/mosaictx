export const workBlock = {
  name: 'work',
  label: 'Mosaic at Work',
  ui: {
    defaultItem: {
      anchor: 'work',
      intro: {
        title: 'Mosaic at Work',
        body: {
          type: 'root',
          children: [
            {
              type: 'p',
              children: [
                {
                  type: 'text',
                  text: 'We are continually searching for exceptional individuals with diverse talents, including wet lab scientists, bioinformaticians, software developers, and statisticians to become part of our team. If the idea of contributing to Mosaic resonates with you, kindly submit your CV',
                },
              ],
            },
          ],
        },
        button: {
          text: 'Join the team',
        }
      },
    }
  },
  fields: [
    {
      name: 'anchor',
      label: 'Anchor Link',
      type: 'string',
    },
    {
      name: 'intro',
      label: 'Intro',
      type: 'object',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'string',
        },
        {
          name: 'body',
          label: 'Body',
          type: 'rich-text',
        },
        {
          name: 'button',
          label: 'Join Us Button',
          type: 'object',
          fields: [
            {
              name: 'text',
              label: 'Text',
              type: 'string',
            }
          ]
        },
      ]
    },
    {
      name: 'values',
      label: 'Values',
      type: 'object',
      fields: [
        {
          name: 'anchor',
          label: 'Anchor Link',
          type: 'string',
        },
        {
          name: 'collaboration',
          label: 'Collaboration',
          type: 'object',
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'string',
            },
            {
              name: 'body',
              label: 'Body',
              type: 'rich-text',
            },
            {
              name: 'image',
              label: 'Image',
              type: 'image',
            },
          ]
        },
        {
          name: 'ambition',
          label: 'Ambition',
          type: 'object',
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'string',
            },
            {
              name: 'body',
              label: 'Body',
              type: 'rich-text',
            },
            {
              name: 'image',
              label: 'Image',
              type: 'image',
            },
          ]
        },
        {
          name: 'resilience',
          label: 'Resilience',
          type: 'object',
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'string',
            },
            {
              name: 'body',
              label: 'Body',
              type: 'rich-text',
            },
            {
              name: 'image',
              label: 'Image',
              type: 'image',
            },
          ]
        },
        {
          name: 'excellence',
          label: 'Excellence',
          type: 'object',
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'string',
            },
            {
              name: 'body',
              label: 'Body',
              type: 'rich-text',
            },
            {
              name: 'image',
              label: 'Image',
              type: 'image',
            },
          ]
        },
        {
          name: 'video',
          label: 'Video',
          type: 'image',
        }
      ]
    },
    {
      name: 'news',
      label: 'News',
      type: 'object',
      fields: [
        {
          name: 'displayNews',
          label: 'Display the news section? (untick to hide)',
          type: 'boolean',
        },
        {
          name: 'anchor',
          label: 'Anchor Link',
          type: 'string',
        },
        {
          name: 'title',
          label: 'Title',
          type: 'string',
        },
        {
          name: 'body',
          label: 'Body',
          type: 'rich-text',
        },
        {
          name: 'newsItems',
          label: 'News Items',
          type: 'object',
          list: true,
          ui: {
            itemProps: (item) => {
              const title = item.title || 'New News Item';
              return {
                label: title,
              };
            }
          },
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'string',
            },
            {
              name: 'date',
              label: 'Date',
              type: 'datetime',
            },
            {
              name: 'category',
              label: 'Category',
              type: 'string',
            },
            {
              name: 'image',
              label: 'Image',
              type: 'image',
            },
            {
              name: 'link',
              label: 'Link',
              type: 'string',
            },
          ]
        }
      ]
    }
  ]
}