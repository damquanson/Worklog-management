export default {
  ACCESS_TOKEN_EXAMPLE:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsInVzZXJfdHlwZV9pZCI6MywicGVybWlzc2lvbnMiOiJbe1wiYWN0aW9uXCI6XCJyZWFkXCIsXCJzdWJqZWN0XCI6XCJBZG1pblwifSx7XCJhY3Rpb25cIjpcImNyZWF0ZVwiLFwic3ViamVjdFwiOlwiQWRtaW5cIn0se1wiYWN0aW9uXCI6XCJ1cGRhdGVcIixcInN1YmplY3RcIjpcIkFkbWluXCJ9LHtcImFjdGlvblwiOlwiY3JlYXRlXCIsXCJzdWJqZWN0XCI6XCJVc2VyXCJ9LHtcImFjdGlvblwiOlwicmVhZFwiLFwic3ViamVjdFwiOlwiVXNlclwifSx7XCJhY3Rpb25cIjpcInVwZGF0ZVwiLFwic3ViamVjdFwiOlwiVXNlclwifSx7XCJhY3Rpb25cIjpcImRlbGV0ZVwiLFwic3ViamVjdFwiOlwiVXNlclwifV0iLCJlbWFpbCI6ImxvbmdudEBtaXJhYm8uY29tLnZuIiwiaXNGaXJzdExvZ2luIjp0cnVlLCJpYXQiOjE2NDkwNDMwMzQsImV4cCI6MTY0OTY0NzgzNH0.5HVyJVsNdG80oUUPuoNtyJxuRwQn9nLBog46X_IpoSE',

  REFRESH_TOKEN_EXAMPLE:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsImVtYWlsIjoibG9uZ250QG1pcmFiby5jb20udm4iLCJpYXQiOjE2NDkwNDMwMzQsImV4cCI6MTY0OTY0NzgzNH0.VGgQKLUaBX_JlgiYVCdGqXPYJAyNtM4ZVhYl-WV8fO4',

  EMAIL_EXAMPLE: 'akisana@hi-litedentallab.com',

  PHONE_EXAMPLE: '758280302476173',

  KANA_EXAMPLE: '氏名',

  NAME_EXAMPLE: 'Marlie Morris',

  DATE_EXAMPLE: '2021-12-06',

  OTP_CODE_EXAMPLE: '923342',

  NUMBER_EXAMPLE: 14,

  DOCUMENT_EXAMPLE: '',

  PASSWORD_EXAMPLE: 'T98VSGGk',

  PHONE_MAX_LENGTH: 15,

  MAX_DOCUMENT_FILE: 6,

  MAX_GROUP_IMAGE: 25,

  DEFAULT_SUCCESS_MSG: 'Successfully',

  DEFAULT_ERROR_MSG: 'Failed',

  PERMISSION_EXAMPLE: {
    id: 3,
    createdAt: '2022-03-08T04:38:23.168Z',
    updatedAt: '2022-04-01T04:39:22.475Z',
    deletedAt: null,
    name: 'System Admin',
    desc: 'Admin quản lý',
    permissions:
      '[{"action":"read","subject":"Admin"},{"action":"create","subject":"Admin"},{"action":"update","subject":"Admin"},{"action":"create","subject":"User"},{"action":"read","subject":"User"},{"action":"update","subject":"User"},{"action":"delete","subject":"User"}]',
  },

  ADMIN_EXAMPLE: {
    email: 'akisana@hi-litedentallab.com',
    name: 'Marlie Morris',
    kana_name: '氏名',
    birthday: '2021-12-06',
    gender: 'MALE',
    position: 'CEO',
    phone_number: '123456789101213',
    address: 'Tokyo',
    portal_code: '10000',
  },

  STORAGE_PATH_DOC3: 'document-type-3/',
  UPLOAD_TYPE_PNG: 'image/png',
  UPLOAD_TYPE_JPEG: 'image/jpeg',

  MESSAGE: {
    AUTH: {
      LOGIN_SUCCESS_MSG: 'Login Success',
      REFRESH_SUCCESS_MSG: 'Refresh success',
    },
  },
  ROLE_EXAMPLE: 'Admin',
  WORKPLACE_EXAMPLE: 'Japan',
  LINK_LINE_EXAMPLE: 'https://liff.line.me/',
  CODE_EXAMPLE: 'AD1',
  ROLE_ID: {
    1: 'Admin',
    2: 'Doctor',
    3: 'User',
  },

  FILE_TYPE: {
    1: 'Menu',
  },

  MENU_EXAMPLE: {
    createdAt: '2023-03-17T07:39:41.218Z',
    updatedAt: '2023-03-17T07:39:41.218Z',
    menuName: 'Menu7',
    menuTime: 30,
    feeOrder: 800,
    menuDescription: 'This is description',
    question: [
      {
        createdAt: '2023-03-17T07:39:41.113Z',
        updatedAt: '2023-03-17T07:39:41.113Z',
        question: '100',
        menuId: null,
        id: 79,
        deletedAt: null,
      },
    ],
    doctor: [
      {
        createdAt: '2023-03-17T07:39:41.180Z',
        updatedAt: '2023-03-17T07:39:41.181Z',
        menuId: null,
        doctorId: 1,
        id: 44,
        deletedAt: null,
      },
      {
        createdAt: '2023-03-17T07:39:41.198Z',
        updatedAt: '2023-03-17T07:39:41.198Z',
        menuId: null,
        doctorId: 2,
        id: 45,
        deletedAt: null,
      },
    ],
    deletedAt: null,
    pathFileId: 2,
    id: 21,
  },
  MENU_EXAMPLE_FINDALL: [
    {
      createdAt: '2023-03-15T10:23:22.392Z',
      updatedAt: '2023-03-15T10:23:22.392Z',
      id: 16,
      menuName: 'Menu3',
      menuTime: 11,
      feeOrder: 501,
      menuDescription: 'This is description',
      pathFileId: 1,
      hasQuestion: true,
      hasDoctor: true,
    },
    {
      createdAt: '2023-03-15T10:20:17.900Z',
      updatedAt: '2023-03-15T10:20:17.900Z',
      id: 15,
      menuName: 'Menu2',
      menuTime: 11,
      feeOrder: 501,
      menuDescription: 'This is description',
      pathFileId: 2,
      hasQuestion: true,
      hasDoctor: true,
    },
    {
      createdAt: '2023-03-15T09:41:58.002Z',
      updatedAt: '2023-03-15T10:53:02.000Z',
      id: 14,
      menuName: 'Menu3',
      menuTime: 222,
      feeOrder: 555,
      menuDescription: 'This is description new',
      pathFileId: 3,
      hasQuestion: true,
      hasDoctor: true,
    },
  ],
  MENU_EXAMPLE_UPDATE: {
    statusCode: 200,
    message: 'Successfully',
    result: {
      menuName: 'Menu5',
      menuTime: 333,
      feeOrder: 666,
      menuDescription: 'This is description new',
      questions: [
        {
          id: 66,
          question: 'This is question 66',
        },
        {
          id: 67,
          question: 'this is new question 67',
        },
        {
          id: 73,
          question: 'this is new question 73 ',
        },
      ],
      doctors: [
        {
          id: 36,
          doctorId: 4,
        },
      ],
      pathFileId: 2,
      id: 17,
    },
  },
  GET_LINK_EXAMPLE:
    'https://s3.aws.com/devmirabo/doctor/term/460eebfa-b55b-4792-a2a8-8480773b136a/sample.pdf?AWSAccessKeyId=minioadmin&Expires=1678964799&Signature=foC5aoh9anaAjbNCR1Yuc0SaceA%3D',
  UPLOAD_FILE_EXAMPLE: {
    pathFileId: 19,
  },

  SCHEDULE_EXAMPLE: {
    createdAt: '2023-03-28T10:10:26.212Z',
    updatedAt: '2023-03-28T10:11:07.314Z',
    id: 1,
    startTime: '2023-03-20T09:00:34.000Z',
    endTime: '2023-03-20T10:00:34.000Z',
    doctorId: 1,
    name: null,
    color: null,
    merged: false,
  },

  SCHEDULE_GET_EXAMPLE: [
    {
      createdAt: '2023-03-28T10:10:26.212Z',
      updatedAt: '2023-03-28T10:11:07.314Z',
      id: 1,
      startTime: '2023-03-20T09:00:34.000Z',
      endTime: '2023-03-20T10:00:34.000Z',
      doctorId: 1,
      name: null,
      color: null,
      merged: false,
    },
  ],
  DATE_IS_NOT_VALIDATE: 'date_is_not_validate',
  USER_MENU_EXAMPLE_FINDALL: [
    {
      createdAt: '2023-03-15T10:23:22.392Z',
      updatedAt: '2023-03-15T10:23:22.392Z',
      id: 16,
      menuName: 'Menu3',
      menuTime: 11,
      feeOrder: 501,
      menuDescription: 'This is description',
      pathFileId: 1,
      hasQuestion: true,
      hasDoctor: true,
      isSchedule: true,
    },
  ],
  MENU_SCHEDULE_EXAMPLE: [
    {
      start: '2023-04-06T16:00:34.000Z',
      end: '2023-04-06T23:00:34.000Z',
    },
  ],
  BOOKING_EXAMPLE: {
    statusCode: 201,
    message: 'Successfully',
    result: {
      userId: 3,
      startTime: '2023-04-18T09:00:00Z',
      endTime: '2023-04-18T09:30:00Z',
      menuId: 48,
      status: 1,
      state: 'st.booking.bookingDrafted',
      isCurrent: true,
      isConfirm: false,
      deletedAt: null,
      scheduleId: null,
      createdAt: '2023-04-18T14:06:37.734Z',
      updatedAt: '2023-04-18T14:06:37.734Z',
      id: 11,
      color: '#FAC682',
      name: 'Giang',
      kanaName: 'this is kana name',
    },
  },

  LIST_BOOKING_EXAMPLE: [
    {
      statusCode: 200,
      message: 'Successfully',
      result: {
        userId: 3,
        startTime: '2023-04-18T09:00:00Z',
        endTime: '2023-04-18T09:30:00Z',
        menuId: 48,
        status: 1,
        state: 'st.booking.bookingDrafted',
        isCurrent: true,
        isConfirm: false,
        deletedAt: null,
        scheduleId: null,
        createdAt: '2023-04-18T14:06:37.734Z',
        updatedAt: '2023-04-18T14:06:37.734Z',
        id: 11,
      },
    },
  ],
  LIST_BOOKING_ALL_EXAMPLE: {
    data: [
      {
        createdAt: '2023-04-18T15:45:08.904Z',
        updatedAt: '2023-04-25T16:40:15.077Z',
        id: 18,
        startTime: '2023-04-17T08:30:00.000Z',
        endTime: '2023-04-17T09:00:00.000Z',
        scheduleId: 35,
        userId: 3,
        menuId: 48,
        status: 'completed',
        isCurrent: null,
        isConfirm: null,
        state: null,
        screenStatus: null,
        user: {
          createdAt: '2023-04-10T07:09:06.304Z',
          updatedAt: '2023-04-12T09:55:04.548Z',
          id: 3,
          name: 'Giang',
          gender: null,
          kanaName: null,
          dateOfBirth: null,
          phoneNumber: null,
          postCode: null,
          address: null,
          lineId: 'Ue08021d41606cadf2b460bd166ed7b2c',
          roleId: 3,
          state: 'st.user.firstLogin',
          customer: null,
          frontInsuranceFileId: null,
          backInsuranceFileId: null,
        },
        menu: {
          createdAt: '2023-04-14T08:56:21.873Z',
          updatedAt: '2023-04-14T08:56:21.873Z',
          id: 48,
          menuName: 'testtt giang',
          menuTime: 30,
          feeOrder: 1232434,
          menuDescription: 'vdfvdsvbwrw3b  dsvfdsdsvdv',
          pathFileId: null,
          beforeDate: 2,
          beforeTime: 2,
          consentForm: '',
        },
        doctor: {
          createdAt: '2023-04-14T08:25:21.764Z',
          updatedAt: '2023-04-14T08:26:05.000Z',
          id: 27,
          email: 'giangtth@mirabo-global.com',
          phoneNumber: '23213344354',
          code: 'AD24',
          password:
            '$2b$10$5UpNFy8b2uujy.RIvFWZxesoBFyJLIXNU.T2.1Z.B4OKUgqPe8pku',
          name: 'GiangTTH',
          kanaName: 'giangtth',
          workplace: null,
          linkLine: null,
          roleId: 2,
          isActive: true,
        },
      },
    ],
    count: 1,
  },
  LIST_USER_ALL_EXAMPLE: {
    data: [
      {
        createdAt: '2023-04-10T07:09:06.304Z',
        updatedAt: '2023-04-12T09:55:04.548Z',
        id: 3,
        name: 'Giang',
        gender: null,
        kanaName: null,
        dateOfBirth: null,
        phoneNumber: null,
        postCode: null,
        address: null,
        lineId: 'Ue08021d41606cadf2b460bd166ed7b2c',
        roleId: 3,
        state: 'st.user.firstLogin',
        customer: null,
        frontInsuranceFileId: null,
        backInsuranceFileId: null,
        bookingLatest: {
          createdAt: '2023-04-18T15:45:08.904Z',
          updatedAt: '2023-04-25T16:40:15.077Z',
          id: 18,
          startTime: '2023-04-17T08:30:00.000Z',
          endTime: '2023-04-17T09:00:00.000Z',
          scheduleId: 35,
          userId: 3,
          menuId: 48,
          status: 'completed',
          isCurrent: null,
          isConfirm: null,
          state: null,
          screenStatus: null,
        },
      },
    ],
    count: 1,
    countBookingDoneByday: 0,
  },
  TYPE_EXAMPLE: [
    {
      createdAt: '2023-04-24T17:22:50.477Z',
      updatedAt: '2023-04-24T17:22:50.477Z',
      id: 1,
      name: '肌の悩み',
      description: null,
    },
    {
      createdAt: '2023-04-24T17:22:50.477Z',
      updatedAt: '2023-04-24T17:22:50.477Z',
      id: 2,
      name: '薄毛',
      description: null,
    },
    {
      createdAt: '2023-04-24T17:22:50.477Z',
      updatedAt: '2023-04-24T17:22:50.477Z',
      id: 3,
      name: '喫煙',
      description: null,
    },
  ],

  USER_HISTORY_EXAMPLE: {
    listBookingReserved: [
      {
        admin_name: 'GiangTTH',
        payment_method_type: 'visa',
        createdAt: '2023-04-24T07:32:35.643Z',
        updatedAt: '2023-04-26T09:04:09.133Z',
        deletedAt: null,
        id: 78,
        start_time: '2023-04-24T13:00:00.000Z',
        end_time: '2023-04-24T13:30:00.000Z',
        schedule_id: 40,
        user_id: 6,
        menu_id: 49,
        is_current: 0,
        is_confirm: 0,
        state: 'st.booking.bookingCreated',
        status: 'reserved',
        screenStatus: '',
        menu_name: 'Menu newest',
        kana_name: 'giangtth',
        link_line: 'https://liff.line.me/16',
        total_payment: '2000',
        user_name: 'Sophie',
        payment_date: '2023-05-19T08:37:53.000Z',
      },
    ],
    listBookingHistory: [
      {
        admin_name: '1234124',
        payment_method_type: null,
        createdAt: '2023-04-24T07:25:59.001Z',
        updatedAt: '2023-04-26T09:04:09.128Z',
        deletedAt: null,
        id: 77,
        start_time: '2023-04-24T12:30:00.000Z',
        end_time: '2023-04-24T13:00:00.000Z',
        schedule_id: 20,
        user_id: 6,
        menu_id: 48,
        is_current: 0,
        is_confirm: 0,
        state: 'st.booking.bookingCancel',
        status: 'cancelled',
        screenStatus: '',
        menu_name: 'testtt giang',
        kana_name: '12312',
        link_line: 'https://liff.line.me/13',
        total_payment: null,
        user_name: 'Sophie',
        payment_date: '2023-04-19T08:37:53.000Z',
      },
    ],
  },
};

export const MAX_TOPIC_LINE_QA = 10;
export const MAX_QUESTION_LINE_QA = 10;
export const MAX_TEXT_LINE_QA = 5000;

export type ORDER = 'ASC' | 'DESC';

export const FOLDER_LINE_QA_IMAGE = 'line-qa/image/';
export const FOLDER_LINE_QA_FILE_IMPORT = 'line-qa/import/';
export const FOLDER_LINE_DATA_AUDIO = 'line-qa/data/audio/';
export const FOLDER_LINE_DATA_IMAGE = 'line-qa/data/image/';
export const FOLDER_LINE_DATA_FILE = 'line-qa/data/file/';
export const FOLDER_LINE_DATA_VIDEO = 'line-qa/data/video/';

export const PREVENT_ACTION_CONFIRM_LINE_QA = 'prevent_confirm_line:';
export const CONFIRM_MESSAGE_LINE_QA =
  'この回答で問題をご解決できましたでしょうか？';
export const ANSWER_DONE_MESSAGE_LINE_QA =
  'お問い合わせありがとうございます。ご質問等がございましたらお気楽にご連絡くださいませ！';

export const MESSAGE_SHOW_ALL_TOPIC =
  '以下のカテゴリごとを選択することで該当のカテゴリの問い合わせ質問が表示されます。';

export const TIME_EXPIRED_DOCUMENT_3 = 14; // 14 days

export const TIME_ZONE = 'Asia/Tokyo'; // time zone of japanese

export const CRON_JP_OH = '0 15 * * *'; // for time zone of japanese

export const MAX_LENGTH_RANDOM_PASSWORD_PUBLIC_URL = 5;

export const DEFAULT_CONTENT = '{}';

export const MAX_LENGTH_BUILDING_CODE = 10;

export const REGEX_NUMBER_REQUIRED = /^\d+$/;

export const MAX_LENGTH_VARCHAR_255 = 255;

export const MAX_LENGTH_ZIP_CODE = 7;
