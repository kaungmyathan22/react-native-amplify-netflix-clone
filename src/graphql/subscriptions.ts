/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateMovie = /* GraphQL */ `
  subscription OnCreateMovie {
    onCreateMovie {
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
export const onUpdateMovie = /* GraphQL */ `
  subscription OnUpdateMovie {
    onUpdateMovie {
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
export const onDeleteMovie = /* GraphQL */ `
  subscription OnDeleteMovie {
    onDeleteMovie {
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
export const onCreateSeason = /* GraphQL */ `
  subscription OnCreateSeason {
    onCreateSeason {
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
export const onUpdateSeason = /* GraphQL */ `
  subscription OnUpdateSeason {
    onUpdateSeason {
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
export const onDeleteSeason = /* GraphQL */ `
  subscription OnDeleteSeason {
    onDeleteSeason {
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
export const onCreateEpisode = /* GraphQL */ `
  subscription OnCreateEpisode {
    onCreateEpisode {
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
export const onUpdateEpisode = /* GraphQL */ `
  subscription OnUpdateEpisode {
    onUpdateEpisode {
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
export const onDeleteEpisode = /* GraphQL */ `
  subscription OnDeleteEpisode {
    onDeleteEpisode {
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
