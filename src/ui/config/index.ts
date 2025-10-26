import GitRepository from '../models/GitRepository';

interface IConfig {
  documentationUrl: string;
  githubRepositoryUrl: string;
  facebookGroupUrl: string;
  discordUrl: string;
  openCollectiveUrl: string;
  expressLRSGit: GitRepository;
  backpackGit: GitRepository;
}

export const Config: IConfig = {
  documentationUrl: 'www.bluelrs.org/',
  githubRepositoryUrl: 'https://github.com/TritiumStudios/blueLRS',
  facebookGroupUrl: 'https://www.facebook.com/',
  discordUrl: 'https://discord.gg/',
  openCollectiveUrl: 'https://opencollective.com/',
  expressLRSGit: {
    cloneUrl: 'https://github.com/TritiumStudios/blueLRS',
    url: 'https://github.com/TritiumStudios/blueLRS',
    owner: 'TritiumStudios',
    repositoryName: 'blueLRS',
    rawRepoUrl: 'https://raw.githubusercontent.com/TritiumStudios/blueLRS',
    srcFolder: 'src',
    tagExcludes: ['<2.5.0'],
    hardwareArtifactUrl:
      'http://bluelrs.io/wp-content/uploads/2025/10/hardware.zip',
  },
  backpackGit: {
    cloneUrl: 'https://github.com/ExpressLRS/Backpack',
    url: 'https://github.com/ExpressLRS/Backpack',
    owner: 'ExpressLRS',
    repositoryName: 'Backpack',
    rawRepoUrl: 'https://raw.githubusercontent.com/ExpressLRS/Backpack',
    srcFolder: '/',
    tagExcludes: [],
    hardwareArtifactUrl: null,
  },
};

export default Config;
