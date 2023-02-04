# dummy dyndns

This project responds to each request with a `good` [return code](https://help.dyn.com/remote-access-api/return-codes/) defined by the DynDNS API. I created this to configure a DynDNS Service to use [WireGuard on a Fritz!Box](https://en.avm.de/news/the-latest-news-from-fritz/2022/wireguard-vpn-has-never-been-so-easy/). Unfortunately AVM decided that either a *MyFritz* or DynDNS Account is required to use WireGuard even just as a VPN Client. Well 🤷.

## usage

- Navigate to the DynDNS Config on your FritzBox Web interface
- enter the following as your `Update-URL` and a domain name which resolves to 127.0.0.1, for example: `127-0-0-1.sslip.io`
- use whatever you want for the remaining entries

```
https://<username>:<pass>@dummy-dyndns.avocado.workers.dev/v3/update?hostname=<domain>&v4=<ipaddr>&v6=<ip6addr>
```

- you're able to configure WireGuard now, enjoy
