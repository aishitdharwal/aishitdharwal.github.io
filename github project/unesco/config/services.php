<?php

return [

	/*
		    |--------------------------------------------------------------------------
		    | Third Party Services
		    |--------------------------------------------------------------------------
		    |
		    | This file is for storing the credentials for third party services such
		    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
		    | default location for this type of information, allowing packages
		    | to have a conventional place to find your various credentials.
		    |
	*/

	'mailgun' => [
		'domain' => env('MAILGUN_DOMAIN'),
		'secret' => env('MAILGUN_SECRET'),
		'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
	],

	'ses' => [
		'key' => env('SES_KEY'),
		'secret' => env('SES_SECRET'),
		'region' => env('SES_REGION', 'us-east-1'),
	],

	'sparkpost' => [
		'secret' => env('SPARKPOST_SECRET'),
	],

	'stripe' => [
		'model' => App\User::class,
		'key' => env('STRIPE_KEY'),
		'secret' => env('STRIPE_SECRET'),
	],
	'google' => [
		'client_id' => '1083960378270-1o9ps5ep2hqc1928llrsihbrr68n73kf.apps.googleusercontent.com',
		'client_secret' => 'HVWQn5VHNJECpZ14JKsFXxD6',
		'redirect' => 'http://localhost:8000/auth/google/callback',
	],
	'facebook' => [
		'client_id' => '173325223528505',
		'client_secret' => '68c13a3c51db304195277c139117f512',
		'redirect' => 'http://localhost:8000/auth/facebook/callback',
	],

];
