 -- Creating new database
CREATE DATABASE store_genius_2_0;
USE store_genius_2_0;


-- App configurations
CREATE TABLE _app_config(
    _apc_id VARCHAR(255) NOT NULL,
    _apc_name VARCHAR(255) NOT NULL,
    _apc_app_name VARCHAR(100),
    _apc_device_name VARCHAR(100),
    _apc_user VARCHAR(100) NOT NULL DEFAULT "Default_Aggestor"
    _apc_ip_address VARCHAR(25),
    _apc_is_configured BOOLEAN NOT NULL,
    _apc_first_config_date DATE NOT NULL,
    _apc_last_config_date DATE  NOT NULL,
    _apc_last_config_time TIME NOT NULL
);

-- Company Configuration
CREATE TABLE _company_config(
    _coc_id VARCHAR(100) NOT NULL,
    _coc_name VARCHAR(100) NOT NULL,
    _coc_mail_address VARCHAR(255),
    _coc_website VARCHAR(255) NULL,
    _coc_phone_numbers TEXT,
    _coc_socials TEXT,
    _coc_age VARCHAR(20),
    _coc_boss VARCHAR(100),
    _coc_gps_coords VARCHAR(30),
    _coc_complete_location_address VARCHAR(100),
    _coc_date DATE NOT NULL,
    _coc_time TIME NOT NULL,
    _coc_is_completed BOOLEAN NOT NULL
);

-- Theme configuration
CREATE TABLE _theme_config(
    _thc_id VARCHAR(255) NOT NULL,
    _thc_name VARCHAR(20) NOT NULL,
    _thc_colors VARCHAR(100) NOT NULL,
    _thc_date DATE NOT NULL
);
-- Privileges configuration
CREATE TABLE _privileges_config(
    _prc_id VARCHAR(255) NOT NULL,
    _prc_name VARCHAR(50) NOT NULL,
    _prc_details TEXT
);

-- User configuration
CREATE TABLE _user_config(
    _udc_id VARCHAR(255) NOT NULL,
    _udc_full_name VARCHAR(100) NOT NULL,
    _udc_username VARCHAR(100) NOT NULL,
    _udc_mail_address VARCHAR(255),
    _udc_phone_number VARCHAR(20),
    _udc_location VARCHAR(100),
    _udc_privileges TEXT DEFAULT "none" NOT NULL,
    _udc_picture VARCHAR(100),
    _udc_password VARCHAR(255) NOT NULL,
    _udc_questions_for_reset_password TEXT NOT NULL,
    _udc_responses_for_reset_password TEXT NOT NULL,
    _udc_is_completed BOOLEAN,
    _udc_is_activated BOOLEAN,
    _udc_theme VARCHAR(255) NOT NULL,
    FOREIGN KEY _udc_theme REFERENCES _theme_config(_thc_id)
);


