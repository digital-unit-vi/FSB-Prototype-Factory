import {
  Austria,
  Canada,
  China,
  Czechia,
  DropdownItem,
  France,
  Germany,
  Greece,
  Ireland,
  Italy,
  Mexico,
  Poland,
  Portugal,
  Spain,
  Switzerland,
  Taiwan,
  Turkey,
  Typography,
  UK as Uk,
  USA as Usa,
} from "@vorwerk/fibre-react";

export const Languages = [
  <DropdownItem key="canada-english">
    <Canada />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Canada <span>(English)</span>
    </Typography>
  </DropdownItem>,

  <DropdownItem key="canada-french">
    <Canada />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Canada <span>(Français)</span>
    </Typography>
  </DropdownItem>,

  <DropdownItem key="czechia">
    <Czechia />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Česko
    </Typography>
  </DropdownItem>,

  <DropdownItem key="china-thermomix">
    <China />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      中国大陆 (Thermomix)
    </Typography>
  </DropdownItem>,

  <DropdownItem key="china-kobold">
    <China />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      中国大陆 (Kobold)
    </Typography>
  </DropdownItem>,

  <DropdownItem key="germany">
    <Germany />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Deutschland
    </Typography>
  </DropdownItem>,

  <DropdownItem key="spain">
    <Spain />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      España
    </Typography>
  </DropdownItem>,

  <DropdownItem key="france">
    <France />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      France
    </Typography>
  </DropdownItem>,

  <DropdownItem key="greece">
    <Greece />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Ελλάδα
    </Typography>
  </DropdownItem>,

  <DropdownItem key="ireland">
    <Ireland />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Ireland
    </Typography>
  </DropdownItem>,

  <DropdownItem key="italy">
    <Italy />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Italia
    </Typography>
  </DropdownItem>,

  <DropdownItem key="mexico">
    <Mexico />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      México
    </Typography>
  </DropdownItem>,

  <DropdownItem key="austria">
    <Austria />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Österreich
    </Typography>
  </DropdownItem>,

  <DropdownItem key="poland">
    <Poland />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Polska
    </Typography>
  </DropdownItem>,

  <DropdownItem key="portugal">
    <Portugal />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Portugal
    </Typography>
  </DropdownItem>,

  <DropdownItem key="switzerland-german">
    <Switzerland />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Schweiz <span>(Deutsch)</span>
    </Typography>
  </DropdownItem>,

  <DropdownItem key="switzerland-french">
    <Switzerland />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Suisse <span>(Français)</span>
    </Typography>
  </DropdownItem>,

  <DropdownItem key="switzerland-italian">
    <Switzerland />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Svizzera <span>(Italiano)</span>
    </Typography>
  </DropdownItem>,

  <DropdownItem key="taiwan">
    <Taiwan />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      台湾
    </Typography>
  </DropdownItem>,

  <DropdownItem key="turkey">
    <Turkey />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Türkiye
    </Typography>
  </DropdownItem>,

  <DropdownItem key="usa">
    <Usa />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      USA
    </Typography>
  </DropdownItem>,

  <DropdownItem key="uk">
    <Uk />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      United Kingdom
    </Typography>
  </DropdownItem>,
];
