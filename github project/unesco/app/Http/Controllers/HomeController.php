<?php

namespace App\Http\Controllers;
use Auth;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller {
	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct() {
		$this->middleware('auth');
	}

	/**
	 * Show the application dashboard.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index() {
		return view('home');
	}
	public function video() {
		$submit = 'video';
		return view('submit', compact('submit'));
	}
	public function photo() {
		$submit = 'photo';
		$token = Auth::user()->remember_token;
		/*return $token;*/
		$exist = DB::table('submissions')->where('token', $token)->first();
		if (isset($exist)) {
			if ($exist->status_photo == 1) {
				$link = '/home';
				$ran = 'already';
				$url = $exist->file_location_photo;
				return view('submit', compact('submit', 'url', 'ran', 'link'));
			} else {
				return view('submit', compact('submit'));
			}
		} else {
			return view('submit', compact('submit'));
		}
	}
	public function photoStore(request $request) {
		if ($request->hasFile('photo')) {
			$request->file('photo');
			$name = Auth::user()->name;
			$email = Auth::user()->email;
			$type_of = $request->photo->extension();
			if ($type_of == 'pdf') {
				$token = Auth::user()->remember_token;
				$file_name = 'photo_' . $token . '.pdf';
				$request->photo->storeAs('public', $file_name);
				$url = Storage::url($file_name);
				$exist = DB::table('submissions')->where('token', $token)->first();
				if (var_dump($exist)) {
					DB::table('submissions')->where('token', $token)->update([
						'file_location_photo' => $url,
						'status_photo' => '1',
					]);
				} else {
					DB::table('submissions')->insert([
						'token' => $token,
						'name' => $name,
						'email' => $email,
						'file_location_photo' => $url,
						'status_photo' => '1',
					]);
				}
				$ran = 'succesfully';
				$submit = 'photo';
				$link = '/home';
				return view('submit', compact('submit', 'url', 'ran', 'link'));

				# code...
			} else {
				$submit = 'photo';
				$err = 'Please Upload Pdf file only';
				return view('submit', compact('err', 'submit'));
			}

		}
	}
	public function essay() {
		$submit = 'essay';
		$token = Auth::user()->remember_token;
		/*return $token;*/
		$exist = DB::table('submissions')->where('token', $token)->first();
		if (isset($exist)) {
			if ($exist->status_essay == 1) {
				$link = '/home';
				$ran = 'already';
				$url = $exist->file_location_essay;
				return view('submit', compact('submit', 'url', 'ran', 'link'));
			} else {
				return view('submit', compact('submit'));
			}
		} else {
			return view('submit', compact('submit'));
		}
	}
	public function essayStore(request $request) {
		if ($request->hasFile('essay')) {
			$request->file('essay');
			$name = Auth::user()->name;
			$email = Auth::user()->email;
			$type_of = $request->essay->extension();
			if ($type_of == 'pdf') {
				$token = Auth::user()->remember_token;
				$file_name = 'essay_' . $token . '.pdf';
				$request->essay->storeAs('public', $file_name);
				$url = Storage::url($file_name);
				$exist = DB::table('submissions')->where('token', $token)->first();
				if (var_dump($exist)) {
					DB::table('submissions')->where('token', $token)->update([
						'file_location_essay' => $url,
						'status_essay' => '1',
					]);
				} else {
					DB::table('submissions')->insert([
						'token' => $token,
						'name' => $name,
						'email' => $email,
						'file_location_essay' => $url,
						'status_essay' => '1',
					]);
				}
				$ran = 'succesfully';
				$submit = 'essay';
				$link = '/home';
				return view('submit', compact('submit', 'url', 'ran', 'link'));

				# code...
			} else {
				$submit = 'essay';
				$err = 'Please Upload Pdf file only';
				return view('submit', compact('err', 'submit'));
			}

		}
	}
}
