# **Futuremakers Full Stack Evaluation**

## Submission

- a github repo
- a vercel deployment link
- reply back to [tanapruk@futuremakers.co.th](mailto:tanapruk@futuremakers.co.th)
    - with following format
    - Here is the test results
        - `{name} {surname}`
        - `{github link}`
        - `{vercel public link}`
    - Highlights
        - `{bullets on what you want to emphasize}`

## Required Stacks

- Use `nextjs` to create a `typescript` application named `search-pokemon` .
- communicate between frontend and backend through `graphql`

## Details

- The search-pokemon application will use a [pokemon graphql api](https://wayfair.github.io/dociql/) hosted [here](https://graphql-pokemon2.vercel.app/) as a datasource.
- The Pokemon interface should account for pokemon attacks and evolutions as described by the schema definitions.
- Make use of the [Graphiql Debugger](https://graphql-pokemon2.vercel.app/) when working with the api, it will make building your queries much easier.
- A search input component that searches the pokemon api by name. This component should also read the state of a search query param.
- A result component that displays all of information about the searched pokemon or a not found view.
- The pokemon result should also contain that attacks and evolutions of that pokemon.
- Clicking on the name of an evolution should update the search query param in the url and show the result of the evolution.
- There is no design requirement, but all results should be easy to read and well organized.
    - *to let us know what kind of developer you are*
- nextjs, react, apollo optimization
    - utilize caching
    - use of path param and nextjs routing
    - use of static optimization
    - use of react library to optimize performance
    - to

## Test (optional)

- In the same application create a test that will be run by the included [jest framework](https://jestjs.io/).
- Create test mocks for Bulbasaur, Charmander, and Squirtle pokemon.
- Write a test suite that assert that each pokemon is the correct type (Grass, Fire, Water).

# Criteria

- Ability to understand requirements
- Your overall web development skills. (setting up projects, structure the folders, typescript)
- Your ability to utilize the libraries and frameworks. E.g., utilize nextjs and its caching. Use of react Suspense.