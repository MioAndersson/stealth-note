import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";
import { StealthMessage } from "../stealth-message";

@Component({
  selector: "app-message-list",
  templateUrl: "./message-list.component.html",
  styleUrls: ["./message-list.component.css"]
})
export class MessageListComponent implements OnInit {
  messages: StealthMessage[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    //this.messages = this.messageService.getMessages();
    this.messageService.getMessages().subscribe(data => (this.messages = data));
  }
}
