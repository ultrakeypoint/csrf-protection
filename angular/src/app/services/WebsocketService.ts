import {environment as env} from '@/environments/environment';
import {Injectable} from '@angular/core';
import {Client} from '@stomp/stompjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private client: Client | undefined;
  private boxes = Array(3)
    .fill(0)
    .map((_, i) => i + 1);
  private topic = 'ws-14';

  constructor() {
    this.client = new Client({
      brokerURL: `${env.wsHost}/ws`,
      onConnect: () => {
        this.client?.subscribe(this.topic, (m) =>
          console.log(`Received: ${m.body}`)
        );

        this.boxes.map((b) => {
          setTimeout(() => this.zoneArr(b), 1000 * b);
          setTimeout(() => this.zoneDpt(b), 2000 * b);
        });
      },
    });

    this.client.activate();
  }

  zoneArr(no: number) {
    this.client?.publish({
      destination: this.topic,
      body: `${this.topic}: No ${no} box arrived.`,
    });
  }

  zoneDpt(no: number) {
    this.client?.publish({
      destination: this.topic,
      body: `${this.topic}: No ${no} box departure.`,
    });
  }
}
