/**
 * App Redux Action Types
 */
export const COLLAPSED_SIDEBAR = 'COLLAPSED_SIDEBAR';
export const DARK_MODE = 'DARK_MODE';
export const BOXED_LAYOUT = 'BOXED_LAYOUT';
export const RTL_LAYOUT = 'RTL_LAYOUT';
export const MINI_SIDEBAR = 'MINI_SIDEBAR';
export const SEARCH_FORM_ENABLE = 'SEARCH_FORM_ENABLE';
export const CHANGE_THEME_COLOR = 'CHANGE_THEME_COLOR';
export const TOGGLE_SIDEBAR_IMAGE = 'TOGGLE_SIDEBAR_IMAGE';
export const SET_SIDEBAR_IMAGE = 'SET_SIDEBAR_IMAGE';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const START_USER_TOUR = 'START_USER_TOUR';
export const STOP_USER_TOUR = 'STOP_USER_TOUR';
export const TOGGLE_DARK_SIDENAV = 'TOGGLE_DARK_SIDENAV';

// Chat App Actions
export const CHAT_WITH_SELECTED_USER = 'CHAT_WITH_SELECTED_USER';
export const SEND_MESSAGE_TO_USER = 'SEND_MESSAGE_TO_USER';
export const UPDATE_USERS_SEARCH = 'UPDATE_USERS_SEARCH';
export const SEARCH_USERS = 'SEARCH_USERS';
export const GET_RECENT_CHAT_USERS = 'GET_RECENT_CHAT_USERS';

// Mail App
export const GET_EMAILS = 'GET_EMAILS';
export const GET_EMAIL_SUCCESS = 'GET_EMAIL_SUCCESS';
export const GET_EMAIL_FAILURE = 'GET_EMAIL_FAILURE';
export const SET_EMAIL_AS_STAR = 'SET_EMAIL_AS_STAR';
export const READ_EMAIL = 'READ_EMAIL';
export const HIDE_LOADING_INDICATOR = 'HIDE_LOADING_INDICATOR';
export const FETCH_EMAILS = 'FETCH_EMAILS';
export const ON_SELECT_EMAIL = 'ON_SELECT_EMAIL';
export const UPDATE_EMAIL_SEARCH = 'UPDATE_EMAIL_SEARCH';
export const SEARCH_EMAIL = 'SEARCH_EMAIL';
export const ON_DELETE_MAIL = 'ON_DELETE_MAIL';
export const ON_BACK_PRESS_NAVIGATE_TO_EMAIL_LISTING = 'ON_BACK_PRESS_NAVIGATE_TO_EMAIL_LISTING';
export const GET_SENT_EMAILS = 'GET_SENT_EMAILS';
export const GET_INBOX = 'GET_INBOX';
export const GET_DRAFTS_EMAILS = 'GET_DRAFTS_EMAILS';
export const GET_SPAM_EMAILS = 'GET_SPAM_EMAILS';
export const GET_TRASH_EMAILS = 'GET_TRASH_EMAILS';
export const ON_EMAIL_MOVE_TO_FOLDER = 'ON_EMAIL_MOVE_TO_FOLDER';
export const SELECT_ALL_EMAILS = 'SELECT_ALL_EMAILS';
export const UNSELECT_ALL_EMAILS = 'UNSELECT_ALL_EMAILS';
export const ON_SEND_EMAIL = 'ON_SEND_EMAIL';
export const EMAIL_SENT_SUCCESSFULLY = 'EMAIL_SENT_SUCCESSFULLY';
export const FILTER_EMAILS_WITH_LABELS = 'FILTER_EMAILS_WITH_LABELS';
export const ADD_LABELS_INTO_EMAILS = 'ADD_LABELS_INTO_EMAILS';

// sidebar
export const TOGGLE_MENU = 'TOGGLE_MENU';

// Agency Sidebar
export const AGENCY_TOGGLE_MENU = 'AGENCY_TOGGLE_MENU';
export const CHANGE_AGENCY_LAYOUT_BG = 'CHANGE_AGENCY_LAYOUT_BG';

// ToDo App
export const GET_TODOS = 'GET_TODOS';
export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const ON_SELECT_TODO = 'ON_SELECT_TODO';
export const ON_HIDE_LOADER = 'ON_HIDE_LOADER';
export const ON_BACK_TO_TODOS = 'ON_BACK_TO_TODOS';
export const ON_SHOW_LOADER = 'ON_SHOW_LOADER';
export const MARK_AS_STAR_TODO = 'MARK_AS_STAR_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const ADD_LABELS_INTO_THE_TASK = 'ADD_LABELS_INTO_THE_TASK';
export const GET_ALL_TODO = 'GET_ALL_TODO';
export const GET_COMPLETED_TODOS = 'GET_COMPLETED_TODOS';
export const GET_DELETED_TODOS = 'GET_DELETED_TODOS';
export const GET_STARRED_TODOS = 'GET_STARRED_TODOS';
export const GET_FILTER_TODOS = 'GET_FILTER_TODOS';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const UPDATE_TASK_TITLE = 'UPDATE_TASK_TITLE';
export const UPDATE_TASK_DESCRIPTION = 'UPDATE_TASK_DESCRIPTION';
export const CHANGE_TASK_ASSIGNER = 'CHANGE_TASK_ASSIGNER';
export const ON_CHECK_BOX_TOGGLE_TODO_ITEM = 'ON_CHECK_BOX_TOGGLE_TODO_ITEM';
export const SELECT_ALL_TODO = 'SELECT_ALL_TODO';
export const GET_UNSELECTED_ALL_TODO = 'GET_UNSELECTED_ALL_TODO';
export const SELECT_STARRED_TODO = 'SELECT_STARRED_TODO';
export const SELECT_UNSTARRED_TODO = 'SELECT_UNSTARRED_TODO';
export const ON_LABEL_SELECT = 'ON_LABEL_SELECT';
export const ON_LABEL_MENU_ITEM_SELECT = 'ON_LABEL_MENU_ITEM_SELECT';
export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const SEARCH_TODO = 'SEARCH_TODO';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';

// Auth Actions
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';
export const LOGIN_FACEBOOK_USER = 'LOGIN_FACEBOOK_USER';
export const LOGIN_GOOGLE_USER = 'LOGIN_GOOGLE_USER';
export const LOGIN_TWITTER_USER = 'LOGIN_TWITTER_USER';
export const LOGIN_GITHUB_USER = 'LOGIN_GITHUB_USER';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE';

// Feedbacks
export const GET_FEEDBACKS = 'GET_FEEDBACKS';
export const GET_FEEDBACKS_SUCCESS = 'GET_FEEDBACKS_SUCCESS';
export const GET_FEEDBACKS_FAILURE = 'GET_FEEDBACKS_FAILURE';
export const GET_ALL_FEEDBACKS = 'GET_ALL_FEEDBACKS';
export const ON_CHANGE_FEEDBACK_PAGE_TABS = 'ON_CHANGE_FEEDBACK_PAGE_TABS';
export const MAKE_FAVORITE_FEEDBACK = 'MAKE_FAVORITE_FEEDBACK';
export const ON_DELETE_FEEDBACK = 'ON_DELETE_FEEDBACK';
export const VIEW_FEEDBACK_DETAILS = 'VIEW_FEEDBACK_DETAILS';
export const ADD_NEW_FEEDBACK = 'ADD_NEW_FEEDBACK';
export const SHOW_FEEDBACK_LOADING_INDICATOR = 'SHOW_FEEDBACK_LOADING_INDICATOR';
export const HIDE_FEEDBACK_LOADING_INDICATOR = 'HIDE_FEEDBACK_LOADING_INDICATOR';
export const NAVIGATE_TO_BACK = 'NAVIGATE_TO_BACK';
export const REPLY_FEEDBACK = 'REPLY_FEEDBACK';
export const SEND_REPLY = 'SEND_REPLY';
export const UPDATE_SEARCH_IDEA = 'UPDATE_SEARCH_IDEA';
export const ON_SEARCH_IDEA = 'ON_SEARCH_IDEA';
export const ON_COMMENT_FEEDBACK = 'ON_COMMENT_FEEDBACK';

// ecommerce
export const ON_DELETE_ITEM_FROM_CART = 'ON_DELETE_ITEM_FROM_CART';
export const ON_QUANTITY_CHANGE = 'ON_QUANTITY_CHANGE';
export const ON_ADD_ITEM_TO_CART = 'ON_ADD_ITEM_TO_CART';
//crm 
export const ADD_NEW_CLIENT = 'ADD_NEW_CLIENT';
export const DELETE_CLIENT = 'DELETE_CLIENT';
export const UPDATE_CLIENT = 'UPDATE_CLIENT';