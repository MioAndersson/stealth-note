import { Injectable } from "@angular/core";
import { StealthMessage } from "./stealth-message";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  private url: string = "https://stealth-api-jv.herokuapp.com/message";

  messages: StealthMessage[] = [];
  //adds message to list, void
  addMessage(message: StealthMessage): void {
    //pushes messages into array
    // this.messages.push(message);
    this.http.post<StealthMessage>(this.url, message).subscribe();
  }
  //get a list of messages
  getMessages(): Observable<StealthMessage[]> {
    //return this.messages;
    return this.http.get<StealthMessage[]>(this.url);
  }

  constructor(private http: HttpClient) {}
}
