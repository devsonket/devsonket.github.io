# DevSonket - Bengali Developer Cheatsheet Repository

## Project Overview
DevSonket is a Gatsby-based static site that generates a comprehensive Bengali developer cheatsheet collection. The architecture centers around JSON-driven content management where individual technology cheatsheets are stored as structured JSON files in the `data/` directory.

## Core Architecture

### Data-Driven Content System
- **Primary Data Source**: `data/*.json` files contain cheatsheet content
- **Three Supported Formats**:
  - `codendesc`: Items with both `code` and `definition` properties
  - `onlycode`: Items with only `code` property  
  - `mix`: Sections can mix both formats within same cheatsheet
- **Demo Files**: Reference `data/demo/` for format examples before creating new cheatsheets

### JSON Structure Pattern
```json
{
  "id": "unique-identifier",
  "title": "বাংলা Title", 
  "slug": "url-slug",
  "description": "Brief description",
  "colorPref": "#hexcolor",
  "contents": [
    {
      "title": "Section Title",
      "items": [
        {"definition": "Description", "code": "command"} // or just {"code": "command"}
      ]
    }
  ]
}
```

### Build Process Integration
- **Thumbnail Generation**: `npm run thumbnail` uses Puppeteer to generate social media images
- **GitHub API Integration**: `gatsby-node.js` fetches contributor data for each cheatsheet via GitHub API
- **Static Site Generation**: Gatsby creates individual pages at `/{data.id}/` and print pages at `/print/{data.id}/`

## Development Workflows

### Adding New Cheatsheets
1. **Direct JSON**: Create properly formatted JSON in `data/` directory
2. **Draft Workflow**: Add rough content to `data/draft/` for later JSON conversion
3. **Required Properties**: Ensure unique `id`, meaningful `title`, and proper `colorPref`
4. **Validation**: Check against demo files in `data/demo/`

### Key Commands
- `npm run develop` - Development server with hot reload
- `npm run build` - Production build with thumbnail generation  
- `npm run thumbnail` - Generate social media thumbnails only
- `postbuild.js` - Copies build files to static deployment structure

### File Naming Conventions
- JSON files use kebab-case matching the `id` field
- Avoid spaces or special characters in filenames
- Keep filenames descriptive but concise

## Project-Specific Patterns

### Contributor Attribution
The `contributorMap.js` script processes GitHub commit history to attribute contributions. Each cheatsheet page displays contributor avatars based on commits to that specific JSON file.

### Color Management  
- Each cheatsheet defines `colorPref` for theming
- `isItDark()` utility determines text contrast automatically
- Colors influence page headers and print layouts

### Bilingual Support Structure
Content primarily in Bengali with English fallbacks. README files demonstrate the bilingual documentation pattern used throughout.

## Critical Dependencies
- **Gatsby**: Static site generation and GraphQL data layer
- **Puppeteer**: Automated thumbnail generation for social sharing
- **Axios**: GitHub API integration for contributor data
- **React**: Component-based UI with emotion styling

## Integration Points
- **GitHub API**: Real-time contributor data (requires `GATSBY_GITHUB_TOKEN`)
- **Static Hosting**: Files copied to `static/` directory for deployment
- **Social Media**: Generated thumbnails enable rich link previews

## Quality Standards
- Maintain JSON format consistency across all cheatsheets
- Include Bengali descriptions for accessibility
- Test thumbnail generation after adding new content
- Verify unique IDs to prevent routing conflicts
