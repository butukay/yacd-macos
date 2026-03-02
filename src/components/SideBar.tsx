import cx from 'clsx';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { Link, useLocation } from 'react-router-dom';

import { fetchVersion } from '~/api/version';
import { ThemeSwitcher } from '~/components/shared/ThemeSwitcher';
import { connect } from '~/components/StateProvider';
import { getClashAPIConfig } from '~/store/app';
import { Symbol } from '~/symbols/Symbol';
import { ClashAPIConfig } from '~/types';

import s from './SideBar.module.scss';

type Props = { apiConfig: ClashAPIConfig };

const pages = [
  {
    to: '/',
    iconId: 'text.and.command.macwindow',
    labelText: 'Overview',
  },
  {
    to: '/proxies',
    iconId: 'rectangle.3.group.fill',
    labelText: 'Groups',
  },
  {
    to: '/rules',
    iconId: 'text.insert',
    labelText: 'Rules',
  },
  {
    to: '/connections',
    iconId: 'globe',
    labelText: 'Connections',
  },
  {
    to: '/configs',
    iconId: 'gear',
    labelText: 'Settings',
  },
  {
    to: '/logs',
    iconId: 'text.document.fill',
    labelText: 'Logs',
  },
  {
    to: '/about',
    iconId: 'info.circle',
    labelText: 'About',
  },
];

const mapState = (s) => ({
  apiConfig: getClashAPIConfig(s),
});

export default connect(mapState)(SideBar);

interface SideBarRowProps {
  isActive: boolean;
  to: string;
  iconId?: string;
  labelText?: string;
}

const SideBarRow = React.memo(function SideBarRow({
  isActive,
  to,
  iconId,
  labelText,
}: SideBarRowProps) {
  const className = cx(s.row, isActive ? s.rowActive : null);
  return (
    <Link to={to} className={className}>
      <div className={s.iconContainer}>
        <Symbol name={iconId} weight="bold" fill="#d5d5d5" stroke="#d5d5d5" />
      </div>
      <div className={s.label}>{labelText}</div>
    </Link>
  );
});

function SideBar(props: Props) {
  const { t } = useTranslation();
  const location = useLocation();

  const { data: version } = useQuery(['/version', props.apiConfig], () =>
    fetchVersion('/version', props.apiConfig)
  );
  return (
    <div className={s.root}>
      <div className={version.meta && version.premium ? s.logo_singbox : s.logo_meta} />
      <div className={s.rows}>
        {pages.map(({ to, iconId, labelText }) => (
          <SideBarRow
            key={to}
            to={to}
            isActive={location.pathname === to}
            iconId={iconId}
            labelText={t(labelText)}
          />
        ))}
      </div>
      <div className={s.footer}>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
