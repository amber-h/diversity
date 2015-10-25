# diversity
[![Build Status](https://snap-ci.com/andrewshawcare/diversity/branch/master/build_image)](https://snap-ci.com/andrewshawcare/diversity/branch/master)

## Developer Setup

### Requirements

#### Environment

In order to successfully run this application, you must acquire and expose a Jigsaw API key. Once acquired, export the `JIGSAW_API_KEY` environment variable.

#### Software

If you're on a mac, you can download and install everything you need with the following commands:

```
brew install caskroom/cask/brew-cask && \
brew cask install virtualbox && \
brew install docker docker-compose docker-machine
```

Once you've installed virtualbox and the docker suite, and if you haven't already done so, you'll need to create a docker machine and export the appropriate environment variables:

`docker-machine create --driver virtualbox dev && eval $(docker-machine env dev)`

Finally, you can sync the database and run the application from the project directory with the following commands:

```
docker-compose --file ./docker-compose-sync.yml up && \
docker-compose up
```
