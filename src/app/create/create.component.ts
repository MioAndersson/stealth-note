import { Component, OnInit } from "@angular/core";
import { StealthMessage } from "../stealth-message";
import { MessageService } from "../message.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  // title: string;
  // message: string;
  message: StealthMessage = new StealthMessage();
  onSubmit(): void {
    // alert("hello");
    this.messageService.addMessage(this.message);
  }
  constructor(private messageService: MessageService) {}

  ngOnInit() {}
}
