<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use \App\Video;
use \App\VideoStream;

class VideosController extends Controller
{

    public function __construct()
    {
        $this->middleware('isAdmin', ['except' => ['show', 'streamVideo']]);
        $this->middleware('isPremium', ['only' => ['show', 'streamVideo']]);
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
            'title' => 'required',
            'course_id' => 'numeric',
            'publishedStatus' => 'string',
            'video_file' => 'required|file',
        ]);

        $video = Video::create([
            'title' => request('title'),
            'slug' => str_slug(request('title')),
            'description' => request('description'),
            'course_id' => request('course_id'),
            'publishedStatus' => request('publishedStatus'),
        ]);

        $videoPath = storage_path() . '/uploads/';
        $fileName = str_slug($request->title) . '.mp4';
        request()->file('video_file')->move($videoPath, $fileName);

        // NOTE:  dispatch an event to uploade to s3

        return response()->json([
            'status' => 'success',
            'msg' => 'video uploaded successfully',
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
            $video = Video::find($searchTerm);
        } else {
            $video = Video::where('slug', $searchTerm)->first();
        }

        $video['url'] = '/videos/stream/' . $video->id;

        return response()->json($video);
    }

    public function streamVideo($id)
    {
        $video = Video::find($id);
        $videoFilePath = storage_path() . '/uploads/' . $video->slug . '.mp4';

        $stream = new VideoStream($videoFilePath);
        $stream->start();
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
