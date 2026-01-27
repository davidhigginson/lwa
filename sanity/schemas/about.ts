import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page Content',
  type: 'document',
  __experimental_formPreviewTitle: false,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'welcome',
      title: 'Welcome Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'origin',
      title: 'Origin Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'howToHelp',
      title: 'How to Help Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'mission',
      title: 'Mission Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'supporters',
      title: 'Supporters Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'accountability',
      title: 'Accountability Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'whatWeFund',
      title: 'What We Fund Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'stTherese',
      title: 'St. Therese Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'intro',
          title: 'Introduction',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'biography',
          title: 'Biography',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'conventLife',
          title: 'Convent Life',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'quote1',
          title: 'Quote 1',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'death',
          title: 'Death',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'legacy',
          title: 'Legacy',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'littleWay',
      title: 'Little Way Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'intro',
          title: 'Introduction',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'meaning',
          title: 'Meaning',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'practice',
          title: 'Practice',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'simplicity',
          title: 'Simplicity',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'modernRelevance',
          title: 'Modern Relevance',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'prayer',
          title: 'Prayer',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'mission',
          title: 'Mission',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'closingQuote',
          title: 'Closing Quote',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'appeal',
      title: 'Appeal Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'mainAppeal',
          title: 'Main Appeal',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'dailyMass',
      title: 'Daily Mass Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'hero.title',
    },
  },
})
