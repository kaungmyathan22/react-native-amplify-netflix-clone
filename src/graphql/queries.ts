/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      title
      movies {
        items {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryMoviesId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        movies {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        movies {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMovie = /* GraphQL */ `
  query GetMovie($id: ID!) {
    getMovie(id: $id) {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      seasons {
        items {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          movieSeasonsId
        }
        nextToken
        startedAt
      }
      category {
        id
        title
        movies {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryMoviesId
    }
  }
`;
export const listMovies = /* GraphQL */ `
  query ListMovies(
    $filter: ModelMovieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        seasons {
          nextToken
          startedAt
        }
        category {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryMoviesId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMovies = /* GraphQL */ `
  query SyncMovies(
    $filter: ModelMovieFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMovies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        seasons {
          nextToken
          startedAt
        }
        category {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryMoviesId
      }
      nextToken
      startedAt
    }
  }
`;
export const getSeason = /* GraphQL */ `
  query GetSeason($id: ID!) {
    getSeason(id: $id) {
      id
      name
      seasons {
        items {
          id
          title
          poster
          duration
          plot
          video
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          seasonSeasonsId
        }
        nextToken
        startedAt
      }
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        seasons {
          nextToken
          startedAt
        }
        category {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryMoviesId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      movieSeasonsId
    }
  }
`;
export const listSeasons = /* GraphQL */ `
  query ListSeasons(
    $filter: ModelSeasonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeasons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        seasons {
          nextToken
          startedAt
        }
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryMoviesId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        movieSeasonsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSeasons = /* GraphQL */ `
  query SyncSeasons(
    $filter: ModelSeasonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSeasons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        seasons {
          nextToken
          startedAt
        }
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryMoviesId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        movieSeasonsId
      }
      nextToken
      startedAt
    }
  }
`;
export const getEpisode = /* GraphQL */ `
  query GetEpisode($id: ID!) {
    getEpisode(id: $id) {
      id
      title
      poster
      duration
      plot
      video
      season {
        id
        name
        seasons {
          nextToken
          startedAt
        }
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryMoviesId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        movieSeasonsId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      seasonSeasonsId
    }
  }
`;
export const listEpisodes = /* GraphQL */ `
  query ListEpisodes(
    $filter: ModelEpisodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEpisodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        poster
        duration
        plot
        video
        season {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          movieSeasonsId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        seasonSeasonsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEpisodes = /* GraphQL */ `
  query SyncEpisodes(
    $filter: ModelEpisodeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEpisodes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        poster
        duration
        plot
        video
        season {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          movieSeasonsId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        seasonSeasonsId
      }
      nextToken
      startedAt
    }
  }
`;
