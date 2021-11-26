import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumModel } from '../models/album-model';
import { PhotoModel } from '../models/photo-model';
import { PostModel } from '../models/post-model';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  private usersUrl: string = 'https://jsonplaceholder.typicode.com/users';
  private albumsUrl: string = 'https://jsonplaceholder.typicode.com/albums';
  private photosUrl: string = 'https://jsonplaceholder.typicode.com/photos';
  private postsUrl: string ='https://jsonplaceholder.typicode.com/posts';

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.usersUrl)
  }

  getUser(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.usersUrl}/${id}`)
  }

  getAlbums(): Observable<AlbumModel[]>{
    return this.http.get<AlbumModel[]>(this.albumsUrl)
  }

  getPhotos(): Observable<PhotoModel[]> {
    return this.http.get<PhotoModel[]>(this.photosUrl)
  }

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.postsUrl}?_sort=views&_order=desc`)
  }
}
