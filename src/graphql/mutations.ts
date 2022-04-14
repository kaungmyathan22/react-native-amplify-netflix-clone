/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createMovie = /* GraphQL */ `
  mutation CreateMovie(
    $input: CreateMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    createMovie(input: $input, condition: $condition) {
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
export const updateMovie = /* GraphQL */ `
  mutation UpdateMovie(
    $input: UpdateMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    updateMovie(input: $input, condition: $condition) {
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
export const deleteMovie = /* GraphQL */ `
  mutation DeleteMovie(
    $input: DeleteMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    deleteMovie(input: $input, condition: $condition) {
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
export const createSeason = /* GraphQL */ `
  mutation CreateSeason(
    $input: CreateSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    createSeason(input: $input, condition: $condition) {
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
export const updateSeason = /* GraphQL */ `
  mutation UpdateSeason(
    $input: UpdateSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    updateSeason(input: $input, condition: $condition) {
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
export const deleteSeason = /* GraphQL */ `
  mutation DeleteSeason(
    $input: DeleteSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    deleteSeason(input: $input, condition: $condition) {
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
export const createEpisode = /* GraphQL */ `
  mutation CreateEpisode(
    $input: CreateEpisodeInput!
    $condition: ModelEpisodeConditionInput
  ) {
    createEpisode(input: $input, condition: $condition) {
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
export const updateEpisode = /* GraphQL */ `
  mutation UpdateEpisode(
    $input: UpdateEpisodeInput!
    $condition: ModelEpisodeConditionInput
  ) {
    updateEpisode(input: $input, condition: $condition) {
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
export const deleteEpisode = /* GraphQL */ `
  mutation DeleteEpisode(
    $input: DeleteEpisodeInput!
    $condition: ModelEpisodeConditionInput
  ) {
    deleteEpisode(input: $input, condition: $condition) {
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
