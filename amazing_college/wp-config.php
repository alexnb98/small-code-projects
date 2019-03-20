<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'amazing_college');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         's5%;TSb#H_eVe]n3kH.yd6q~%Uzn7;k#:<s8_gRk#*RK%C J8.]ITIe2{s/=8zs^');
define('SECURE_AUTH_KEY',  'w>=LMZ/F,_nQ#~$6JU>q_3A]BM-r+}l]UI%Df#27{COO4+nY|X)(<Tf}7}]7Q f)');
define('LOGGED_IN_KEY',    '_5u+Ob8`X&D]C?KV-Hp/#Q]<i4~mu!/T!8c?p;d4YY%8DV%ssmB?O6&i#Wcki`a7');
define('NONCE_KEY',        'f9r#5e`QaKr$&C}L<MbjC7kJdQoVqXL_~+kn{i@|>1C3(.EIooy7@)8&^*Q`lz|W');
define('AUTH_SALT',        'fim<s;jT$<XRa1+QVo,whgzW)(0<BxA&Ui qopyft(Z*I+UuZtHeF=.O5^vXa;p8');
define('SECURE_AUTH_SALT', 'IC3IdYaUZ0?cn2[`5&!Z-9%f/>AH.`Fpi>5F8n^:k#-N?4$}X|ti5DyDw^rpq$  ');
define('LOGGED_IN_SALT',   'Id5<vnfCD3r#cKSJs*N?^-mM}AOdke`YTdM]dy~!Ve7|D3uHk#@4n6f*UfK4;p:$');
define('NONCE_SALT',       'Ljh]o>j5[B/-8{?}PvnK(IrK(OWmiD+W_Ba$z8oAWqbQdl[p9Zr0Y{q?<IN]PQ7k');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
