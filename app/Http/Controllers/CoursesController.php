<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Course;
use \App\Video;

class CoursesController extends Controller
{

    public function __construct()
    {
        $this->middleware('isAdmin', ['except' => ['index', 'show']]);
        $this->middleware('isPremium');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //  NOTE: add pagination
		$courses = Course::where('publishedStatus', 'published')->get();
		
        return response()->json([
            'status' => 'success',
            'data' => $courses,
        ]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|unique:courses|max:255',
            'description' => 'required',
            'publishedStatus' => 'required',
            'duration' => 'required',
        ]);

        $course = new Course([
            'title' => $request->title,
            'description' => $request->description,
            'publishedStatus' => $request->publishedStatus,
            'duration' => $request->duration,
            'slug' => str_slug($request->title),
        ]);

        $course->save();

        return response()->json([
            'status' => 'success',
            'msg' => 'added new course',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int||string  $searchTerm
     * @return \Illuminate\Http\Response
     */
    public function show($searchTerm)
    {
        if (Is_Numeric($searchTerm)) {
            $course = Course::find($searchTerm);
        } else {
            $course = Course::where('slug', $searchTerm)->first();
        }

        $videos = \App\Video::where('course_id', $course->id)->get();

        foreach ($videos as &$video) {
            $video['url'] = '/videos/stream/' . $video->id;
        }

        $course['videos'] = $videos;

        return response()->json($course);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Course::find($id)->forceDelete();
		Video::where('course_id', $id)->forceDelete();

        return response()->json([
            'status' => 'success',
            'msg' => 'the course and its videos are deleted permanently',
        ]);
    }
}
