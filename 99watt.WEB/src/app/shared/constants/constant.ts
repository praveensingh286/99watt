export const constant = {
    emailRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    defaultProfileImage: 'assets/images/default-profile.jpg',
    defaultImage: {
        profilePic: 'assets/img/profilePic.png',
        appleStore: 'assets/img/apple.png',
        playStore: 'assets/img/playStore.jpg'
    },
    blobConfig: {
        name: 'chessfellowblob',
        containerName: 'chessfellow'
    },
    // blobUrl: 'https://chessfellowblob.blob.core.windows.net/chessfellow/',
    imageSize: Number(1048576 * 10), // 20 MB
    videoSize: Number(1048576 * 50), // 50 MB
    
   
    filterTypes: [
        { id: 0, value: 'All meetings' },
        { id: 1, value: 'Today' },
        { id: 2, value: 'Tomorrow' },
        { id: 3, value: 'Weekend' },
        { id: 4, value: 'Week days' }
    ],
   
    role: {
        userRoleId: 3,
        adminRoleId: 1
    },
    deviceToken: 'web123456',
    deviceType: 3,
    genderList: [
        { id: 1, value: 'Male' },
        { id: 2, value: 'Female' },
        { id: 3, value: 'Others' }
    ],
    dummyProfilePic: 'assets/img/profilePic.png',
    quickbloxId: 0,
    datePipe: 'en-US',
       defaulyLanguage: 'en',
    languageList: ['en', 'nl'],
   
    pagination: {
        pageLimit: 100,
        pageOffset: 0,
        pageNumber: 0
    },
  
};
